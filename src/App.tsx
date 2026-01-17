import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabaseClient";

// Layout & Components
import { Navbar } from "./components/Navbar";

// Pages
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./components/Footer";

function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [themeSource, setThemeSource] = useState<"system" | "user">(() =>
    localStorage.getItem("theme") ? "user" : "system"
  );

  useEffect(() => {
    // 1. Check current session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // 2. Listen for auth changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (themeSource !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeSource]);

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    setThemeSource("user");
    localStorage.setItem("theme", nextTheme);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar theme={theme} onToggleTheme={handleThemeToggle} />

        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Auth Route: Redirect to dashboard if already logged in */}
            <Route
              path="/login"
              element={!session ? <Auth /> : <Navigate to="/dashboard" />}
            />

            {/* Protected Route: Only accessible if session exists */}
            <Route
              path="/dashboard"
              element={session ? <Dashboard /> : <Navigate to="/login" />}
            />

            {/* Catch-all: Redirect to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        {/* Optional: Simple Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
