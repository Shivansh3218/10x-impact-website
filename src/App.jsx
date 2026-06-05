import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Initiatives from "./pages/Initiatives";
import ResourcesPage from "./pages/ResourcesPage";
import Join from "./pages/Join";
import Contact from "./pages/Contact";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <CursorGlow />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
