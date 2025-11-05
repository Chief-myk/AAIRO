import React, { useState, useEffect } from "react";
import Index from "./pages/Index";
import LoadingSpinner from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accreditations from "./pages/Accreditations";
import Blog from "./pages/Blog";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Projects  from "./pages/Projects";
import Membership from "./pages/membership";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact"
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
