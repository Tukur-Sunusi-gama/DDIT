import { useEffect, useMemo, useState, useCallback } from "react";
import { supabase } from "../api/supabaseClient";
import { ShieldCheck, RefreshCcw } from "lucide-react";

type Quote = {
  id: string;
  user_id: string | null;
  service_type: string;
  description: string;
  status: string;
  created_at: string;
};

const statusOptions = ["pending", "in_progress", "completed"] as const;

export const Admin = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadRole = useCallback(async () => {
    setAuthLoading(true);
    setError(null);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user?.id) {
      setIsAdmin(false);
      setAuthLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();
    if (error) {
      setError(error.message);
      setIsAdmin(false);
    } else {
      setIsAdmin(data?.role === "admin");
    }
    setAuthLoading(false);
  }, []);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    if (!isAdmin) {
      setQuotes([]);
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from("quotes")
      .select("id,user_id,service_type,description,status,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setQuotes(data ?? []);
    }
    setLoading(false);
  }, [isAdmin]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadRole();
  }, [loadRole]);

  useEffect(() => {
    if (!authLoading && isAdmin) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchQuotes();
    }
  }, [authLoading, isAdmin, fetchQuotes]);

  const handleStatusChange = async (id: string, status: string) => {
    setSavingId(id);
    const { error } = await supabase
      .from("quotes")
      .update({ status })
      .eq("id", id);
    if (error) {
      setError(error.message);
    } else {
      setQuotes((prev) =>
        prev.map((quote) =>
          quote.id === id ? { ...quote, status } : quote
        )
      );
    }
    setSavingId(null);
  };

  const summary = useMemo(() => {
    return quotes.reduce(
      (acc, quote) => {
        acc.total += 1;
        acc.byStatus[quote.status] =
          (acc.byStatus[quote.status] ?? 0) + 1;
        return acc;
      },
      { total: 0, byStatus: {} as Record<string, number> }
    );
  }, [quotes]);

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <span className="text-sm uppercase tracking-widest text-[var(--color-muted)] font-bold">
            Admin Console
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text)] mt-2 flex items-center gap-3">
            <ShieldCheck className="text-[var(--color-primary)]" />
            Requests Overview
          </h2>
        </div>
        <button
          onClick={fetchQuotes}
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2.5 rounded-xl font-bold hover:opacity-90 transition-all"
          type="button"
        >
          <RefreshCcw size={18} /> Refresh
        </button>
      </div>

      <div className="card-surface rounded-3xl p-6 mb-8">
        <div className="flex flex-wrap gap-6 text-sm font-semibold text-[var(--color-text)]">
          <div>
            Total Requests{" "}
            <span className="ml-2 text-[var(--color-primary)]">
              {summary.total}
            </span>
          </div>
          {Object.entries(summary.byStatus).map(([status, count]) => (
            <div key={status} className="capitalize">
              {status.replace("_", " ")}{" "}
              <span className="ml-2 text-[var(--color-primary)]">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {authLoading ? (
        <div className="card-surface p-10 rounded-3xl text-center text-[var(--color-muted)]">
          Checking access...
        </div>
      ) : !isAdmin ? (
        <div className="card-surface p-10 rounded-3xl text-center text-red-500">
          Admin access required.
        </div>
      ) : loading ? (
        <div className="card-surface p-10 rounded-3xl text-center text-[var(--color-muted)]">
          Loading requests...
        </div>
      ) : error ? (
        <div className="card-surface p-10 rounded-3xl text-center text-red-500">
          {error}
        </div>
      ) : quotes.length === 0 ? (
        <div className="card-surface p-10 rounded-3xl text-center text-[var(--color-muted)]">
          No requests yet.
        </div>
      ) : (
        <div className="space-y-4">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="card-surface p-6 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] font-bold mb-2">
                  {new Date(quote.created_at).toLocaleString()}
                </div>
                <h4 className="text-lg font-bold text-[var(--color-text)]">
                  {quote.service_type}
                </h4>
                <p className="text-[var(--color-muted)] mt-1">
                  {quote.description}
                </p>
                <p className="text-xs text-[var(--color-muted)] mt-2">
                  User ID: {quote.user_id ?? "Unknown"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={quote.status}
                  onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                  className="px-4 py-2 rounded-xl bg-[var(--color-accent)] text-[var(--color-text)] font-semibold"
                  disabled={savingId === quote.id}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status.replace("_", " ")}
                    </option>
                  ))}
                </select>
                {savingId === quote.id && (
                  <span className="text-sm text-[var(--color-muted)]">
                    Saving...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
