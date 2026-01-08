import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

interface Quote {
  id: string;
  service_type: string;
  description: string;
  budget_range: string;
  status: string;
  created_at: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [formData, setFormData] = useState({
    service_type: "",
    description: "",
    budget_range: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);
        fetchQuotes(user.id);
      }
    };
    getUser();
  }, [navigate]);

  const fetchQuotes = async (userId: string) => {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching quotes:", error);
    } else {
      setQuotes(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.from("quotes").insert([
      {
        user_id: user.id,
        service_type: formData.service_type,
        description: formData.description,
        budget_range: formData.budget_range,
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      // Trigger email notification
      await supabase.functions.invoke("send-quote-email", {
        body: { quote: { ...formData, user_email: user.email } },
      });
      alert("Quote submitted successfully!");
      setFormData({ service_type: "", description: "", budget_range: "" });
      fetchQuotes(user.id);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quote Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>
            <form onSubmit={handleSubmit}>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Service Type</label>
                <select
                  value={formData.service_type}
                  onChange={(e) =>
                    setFormData({ ...formData, service_type: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="Web Design">Web Design</option>
                  <option value="CAC Registration">CAC Registration</option>
                  <option value="IT Consultancy">IT Consultancy</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Describe your project requirements..."
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Budget Range</label>
                <select
                  value={formData.budget_range}
                  onChange={(e) =>
                    setFormData({ ...formData, budget_range: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="$1k-$5k">$1k - $5k</option>
                  <option value="$5k-$10k">$5k - $10k</option>
                  <option value="$10k-$25k">$10k - $25k</option>
                  <option value="$25k+">$25k+</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Quote"}
              </button>
            </form>
          </div>

          {/* Previous Quotes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Your Quotes</h2>
            {quotes.length === 0 ? (
              <p className="text-gray-500">No quotes submitted yet.</p>
            ) : (
              <div className="space-y-4">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="border border-gray-200 p-4 rounded"
                  >
                    <h3 className="font-semibold">{quote.service_type}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {quote.description}
                    </p>
                    <p className="text-sm">
                      <strong>Budget:</strong> {quote.budget_range}
                    </p>
                    <p className="text-sm">
                      <strong>Status:</strong> {quote.status}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(quote.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
