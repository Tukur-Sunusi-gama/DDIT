import { useState, useEffect, useCallback } from "react";
import { supabase } from "../api/supabaseClient";
import { Send, Clock, CheckCircle, Package } from "lucide-react";

type Quote = {
  id: string;
  service_type: string;
  description: string;
  status: string;
  created_at: string;
};

export const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    service_type: "SaaS Development",
    description: "",
  });

  // Fetch user's previous quotes
  const fetchQuotes = useCallback(async () => {
    setError(null);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user?.id) {
      setQuotes([]);
      setError("You must be signed in to view requests.");
      return;
    }
    const { data } = await supabase
      .from("quotes")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });
    if (data) setQuotes(data);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchQuotes();
  }, [fetchQuotes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user?.id) {
      setLoading(false);
      setError("You must be signed in to submit a request.");
      return;
    }

    const { error } = await supabase
      .from("quotes")
      .insert([{ ...form, user_id: user?.id }]);

    if (!error) {
      alert("Quote request submitted!");
      setForm({ ...form, description: "" });
      fetchQuotes();
    } else {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
      {/* Quote Submission Form */}
      <div className="lg:col-span-1">
        <div className="card-surface p-8 rounded-3xl sticky top-28">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--color-text)]">
            <Package className="text-[var(--color-primary)]" /> New Request
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-[var(--color-muted)]">
                Service Required
              </label>
              <select
                className="w-full mt-1 p-3 bg-[var(--color-accent)] rounded-lg border-none focus:ring-2 focus:ring-[var(--color-primary)]"
                onChange={(e) =>
                  setForm({ ...form, service_type: e.target.value })
                }
              >
                <option>SaaS Development</option>
                <option>Web Design</option>
                <option>CAC Registration</option>
                <option>IT Consultancy</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-[var(--color-muted)]">
                Project Description
              </label>
              <textarea
                required
                className="w-full mt-1 p-3 bg-[var(--color-accent)] rounded-lg border-none focus:ring-2 focus:ring-[var(--color-primary)] h-32"
                placeholder="Briefly explain what you need..."
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
            <button
              disabled={loading}
              className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  <Send size={18} /> Submit Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Quote History */}
      <div className="lg:col-span-2">
        <h3 className="text-xl font-bold mb-6 text-[var(--color-text)]">
          Your Request History
        </h3>
        {error && (
          <div className="bg-[var(--color-surface)] p-6 rounded-2xl text-center text-red-500 border border-[var(--color-border)] mb-4">
            {error}
          </div>
        )}
        {quotes.length === 0 ? (
          <div className="bg-[var(--color-surface)] p-10 rounded-3xl text-center border-2 border-dashed border-[var(--color-border)]">
            <p className="text-[var(--color-muted)]">
              No requests found. Submit your first quote request to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {quotes.map((quote) => (
              <div
                key={quote.id}
                className="card-surface p-6 rounded-2xl flex justify-between items-center"
              >
                <div>
                  <h4 className="font-bold text-[var(--color-text)]">
                    {quote.service_type}
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm line-clamp-1">
                    {quote.description}
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">
                    {new Date(quote.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold uppercase">
                  {quote.status === "pending" ? (
                    <Clock size={14} />
                  ) : (
                    <CheckCircle size={14} />
                  )}
                  {quote.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
