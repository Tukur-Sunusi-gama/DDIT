import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

// We'll create the empty versions of these next
const Placeholder = ({ name }: { name: string }) => (
  <div className="p-20 text-center text-2xl font-bold">
    {name} Page Coming Soon
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Placeholder name="Services" />} />
        <Route path="/about" element={<Placeholder name="About" />} />
        <Route path="/contact" element={<Placeholder name="Contact" />} />
        <Route path="/dashboard" element={<Placeholder name="Dashboard" />} />
        <Route path="/login" element={<Placeholder name="Login" />} />
      </Routes>
    </Router>
  );
}

export default App;
