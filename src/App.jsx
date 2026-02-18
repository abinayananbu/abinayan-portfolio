import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import IntroLoader from "./components/IntroLoader";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <IntroLoader />}
      </AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>

          <Analytics />
        </BrowserRouter>
      )}
    </>
  );
}
