import { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaFileAlt, FaCommentDots } from "react-icons/fa";

const QueryForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    claimType: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/query", form);
    alert("Query Submitted");
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 flex items-center justify-center p-6">
      
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Claim Query Form
          </h2>
          <p className="text-gray-200 text-sm mt-2">
            Submit your claim related questions here
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-gray-300" />
            <input
              required
              placeholder="Full Name"
              className="w-full bg-white/20 text-white placeholder-gray-200 border border-white/30 pl-12 p-3 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-300" />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/20 text-white placeholder-gray-200 border border-white/30 pl-12 p-3 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
              onChange={(e)=>setForm({...form,email:e.target.value})}
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-300" />
            <input
              required
              type="num"
              placeholder="Contact number"
              className="w-full bg-white/20 text-white placeholder-gray-200 border border-white/30 pl-12 p-3 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
              onChange={(e)=>setForm({...form,phone:e.target.value})}
            />
          </div>

          {/* Claim Type */}
          <div className="relative">
            <FaFileAlt className="absolute top-4 left-4 text-gray-300" />
            <select
              required
              className="w-full bg-white/20 text-white border border-white/30 pl-12 p-3 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none appearance-none"
              onChange={(e)=>setForm({...form,claimType:e.target.value})}
            >
              <option className="text-black" value="">Select Claim Type</option>
              <option className="text-black">Health Insurance</option>
              <option className="text-black">Life Insurance claim</option>
              <option className="text-black">Accident Claim</option>
              <option className="text-black">Motor Claim</option>
              <option className="text-black">Travel Claim</option>
              <option className="text-black">Fire Claim</option>
              <option className="text-black">Banking Claim</option>
              <option className="text-black">Machinery Claim</option>
              <option className="text-black">Postal scheme Claim</option>
              <option className="text-black">Burglary Claim</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <FaCommentDots className="absolute top-4 left-4 text-gray-300" />
            <textarea
              rows="4"
              placeholder="Write your query..."
              className="w-full bg-white/20 text-white placeholder-gray-200 border border-white/30 pl-12 p-3 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
              onChange={(e)=>setForm({...form,message:e.target.value})}
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-linear-to-r from-cyan-400 to-blue-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition duration-300">
            Submit Query 🚀
          </button>

        </form>

      </div>
    </div>
  );
};

export default QueryForm;

