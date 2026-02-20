import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";

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

function AppContent() {
  const [accepted, setAccepted] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!accepted && !isAdminRoute && (
        <TermsPopup onAccept={() => setAccepted(true)} />
      )}

      {(accepted || isAdminRoute) && (
        <>
          {!isAdminRoute && (
            <>
              <Navbar />
              <SocialIcons />
            </>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/query" element={<QueryForm />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/contact" element={<AdminContact />} />
            <Route path="/admin/query" element={<AdminQuery />} />
          </Routes>

          {!isAdminRoute && <Footer />}
        </>
      )}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;