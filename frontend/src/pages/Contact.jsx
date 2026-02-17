import { useState } from "react";
import axios from "axios";
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
    <div className="min-h-screen bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 p-6 relative overflow-hidden">

      {/* Animated blobs */}
      <div className="absolute w-96 h-96 bg-pink-400/40 rounded-full blur-3xl animate-pulse `top-25` `left-20`"></div>
      <div className="absolute w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl animate-pulse `bottom-25` `-right-20`"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-white/10">

        {/* LEFT SIDE */}
        <div className="p-12 text-white flex flex-col justify-center bg-linear-to-br from-black/70 to-black/40">

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Let’s Talk 👋
          </h1>

          <p className="text-gray-200 mb-10 text-lg">
            Have any questions? We are here to help you with policies,
            claims and financial support anytime.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl hover:bg-white/20 hover:scale-105 transition">
              <FaPhone className="text-2xl text-pink-400" />
              <span className="text-lg">+91 98901 84552</span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl hover:bg-white/20 hover:scale-105 transition">
              <FaEnvelope className="text-2xl text-cyan-400" />
              <span className="text-lg">claim@branch03343@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl hover:bg-white/20 hover:scale-105 transition">
              <FaMapMarkerAlt className="text-2xl text-yellow-400" />
              <span className="text-lg">Virar, Maharashtra</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-12 space-y-6"
        >

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Form
          </h2>

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-purple-500" />
            <input
              required
              placeholder="Full Name"
              className="w-full border-2 border-gray-200 pl-12 p-4 rounded-xl focus:border-purple-500 outline-none transition"
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
              className="w-full border-2 border-gray-200 pl-12 p-4 rounded-xl focus:border-purple-500 outline-none transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute top-4 left-4 text-purple-500" />
            <input
              placeholder="Phone Number"
              className="w-full border-2 border-gray-200 pl-12 p-4 rounded-xl focus:border-purple-500 outline-none transition"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaCommentDots className="absolute top-4 left-4 text-purple-500" />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border-2 border-gray-200 pl-12 p-4 rounded-xl focus:border-purple-500 outline-none transition"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* Button */}
          <button className="w-full bg-linear-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300">
            Send Message 🚀
          </button>

        </form>

      </div>

      {/* MAP SECTION */}
      <div className="max-w-6xl mx-auto mt-14 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Virar%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full `h-87.5`"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
