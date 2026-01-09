import { useState } from "react";
import { supabase } from "../api/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";

export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = isLogin
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
    } else {
      if (isLogin) {
        navigate("/dashboard");
      } else {
        alert(
          "Registration successful! Please check your email for a confirmation link."
        );
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl shadow-blue-100 border border-gray-100 w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900">
            {isLogin ? "Welcome Back" : "Join DDIT"}
          </h2>
          <p className="text-gray-500 mt-2">
            {isLogin
              ? "Access your project dashboard"
              : "Start your digital journey with us"}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {loading ? (
              "Processing..."
            ) : isLogin ? (
              <>
                <LogIn size={20} /> Sign In
              </>
            ) : (
              <>
                <UserPlus size={20} /> Create Account
              </>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-600 font-bold hover:underline"
          >
            {isLogin ? "Register Now" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};
