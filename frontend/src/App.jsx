import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialIcons from "./components/Icons";
import TermsPopup from "./components/TermsPopup";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import QueryForm from "./pages/QueryForm";

import Dashboard from "./pages/Dashboard";
import AdminContact from "./admin/Contact";
import AdminQuery from "./admin/Query";

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      {!accepted && (
        <TermsPopup onAccept={() => setAccepted(true)} />
      )}

      {accepted && (
        <BrowserRouter>

          <Navbar />
          <SocialIcons />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/query" element={<QueryForm />} />

            {/* Admin */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/contact" element={<AdminContact />} />
            <Route path="/admin/query" element={<AdminQuery />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      )}
    </>
  );
}

export default App;
