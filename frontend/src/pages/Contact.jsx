import { useState } from "react";
import axios from "axios";
import SEO from "../components/SEO";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaMapMarkerAlt
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", form);
    alert("Submitted Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-teal-700 to-cyan-500 p-4 sm:p-6 relative overflow-hidden">
      <SEO
        title="Contact page"
        description="Professional insurance claim consultancy services. Fast processing and expert guidance."
      />
      {/* Animated blobs */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-pink-400/40 rounded-full blur-3xl animate-pulse top-10 left-0"></div>
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-cyan-300/40 rounded-full blur-3xl animate-pulse bottom-10 right-0"></div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-white/10">

        {/* LEFT SIDE */}
        <div className="p-6 sm:p-10 md:p-12 text-white flex flex-col justify-center bg-gradient-to-br from-black/70 to-black/40">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s Talk 👋
          </h1>

          <p className="text-gray-200 mb-8 sm:mb-10 text-base sm:text-lg">
            Have any questions? We are here to help you with policies,
            claims and financial support anytime.
          </p>

          <div className="space-y-4 sm:space-y-6">

            <div className="flex items-center gap-4 bg-white/10 p-4 sm:p-5 rounded-2xl hover:bg-white/20 transition">
              <FaPhone className="text-xl sm:text-2xl text-pink-400" />
              <span className="text-base sm:text-lg">+91 98901 84552</span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 sm:p-5 rounded-2xl hover:bg-white/20 transition">
              <FaEnvelope className="text-xl sm:text-2xl text-cyan-400" />
              <span className="text-base sm:text-lg break-all">
                branch03343@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 sm:p-5 rounded-2xl hover:bg-white/20 transition">
              <FaMapMarkerAlt className="text-xl sm:text-2xl text-yellow-400" />
              <span className="text-base sm:text-lg">
                Virar, Maharashtra
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-10 md:p-12 space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Contact Form
          </h2>

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-purple-500" />
            <input
              required
              placeholder="Full Name"
              className="w-full border-2 border-gray-200 pl-12 p-3  rounded-xl focus:border-purple-500 outline-none"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-purple-500" />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full border-2 border-gray-200 pl-12 p-3  rounded-xl focus:border-purple-500 outline-none"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute top-4 left-4 text-purple-500" />
            <input
              placeholder="Phone Number"
              className="w-full border-2 border-gray-200 pl-12  p-3  rounded-xl focus:border-purple-500 outline-none"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaCommentDots className="absolute top-4 left-4 text-purple-500" />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border-2 border-gray-200 pl-12 p-3 rounded-xl focus:border-purple-500 outline-none"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* Button */}
          <button className="w-full bg-linear-to-r from-pink-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-lg shadow-xl hover:scale-105 transition">
            Send Message 🚀
          </button>
        </form>

      </div>

      {/* MAP */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-14 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.8852039605176!2d72.8115985!3d19.454395200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a982a5fa2a01%3A0xe14103fbada1395d!2sGaurisha!5e1!3m2!1sen!2sin!4v1771405778160!5m2!1sen!2sin"
          className="w-full h-62.5 sm:h-87.5 md:h-112.5"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
