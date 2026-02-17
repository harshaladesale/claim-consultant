import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import QueryForm from "./pages/QueryForm";
import Blog from "./pages/Blog";

import Dashboard from "./pages/Dashboard";
import AdminContact from "./admin/Contact";
import AdminQuery from "./admin/Query";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ===== Public Website Layout ===== */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/query" element={<QueryForm />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>

              <Footer />
            </>
          }
        />

        {/* ===== Admin Dashboard Layout ===== */}
        <Route path="/admin" element={<Dashboard />}>
          <Route path="contact" element={<AdminContact />} />
          <Route path="query" element={<AdminQuery />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
