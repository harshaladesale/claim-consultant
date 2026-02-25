import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/register",
        form,
        { withCredentials: true }
      );

      alert(res.data.message);

      // Optional: redirect to login after register
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500  px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/admin/login"
            className="text-indigo-700 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;