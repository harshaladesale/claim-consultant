import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {

  /* ---------- HERO CAROUSEL ---------- */

  const images = [
    "/images/insurance.png",
    "/images/postal.png",
    "/images/mediclaim.png",
    // "/images/buglery.png",
    "/images/accident.png",
    "/images/fire.png",
    ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 text-white">
      

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Expert Guidance for Every Claim, Every Time
          </h1>

          <h3 className="text-lg md:text-xl mb-4">
            Dedicated to Fair and Timely Claim Settlement
          </h3>

          <p className="mb-8 text-gray-200">
            We provide intelligent systems that optimize claim workflows.
          </p>

          <Link
            to="/query"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Query Form
          </Link>
        </motion.div>

        {/* RIGHT IMAGE CAROUSEL */}
        <div className="relative w-full md:w-[45%] mt-10 md:mt-0 overflow-hidden rounded-xl shadow-2xl">

          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Insurance"
              className="w-full h-80 md:h-105 object-cover"

              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-white text-gray-800 py-24 px-8 md:px-20 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Our Claim Consultancy?
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-blue-700 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Expert Claim Advisors",
              icon: "👨‍💼",
              desc: "Highly experienced consultants who guide you through every stage of your insurance claim."
            },
            {
              title: "Fast Claim Processing",
              icon: "⚡",
              desc: "We minimize delays and ensure your claim moves forward quickly with correct documentation."
            },
            {
              title: "100% Client Support",
              icon: "🤝",
              desc: "Complete support from claim filing to settlement ensuring stress-free claim experience."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-linear-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>


      {/* CLAIM STEPS */}
      <section className="py-20 px-8 md:px-20">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Steps to Claim Settlement
        </motion.h2>

        <p className="text-center mb-14 max-w-2xl mx-auto">
          We stand with you at every stage to ensure you receive the claim amount you deserve.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Explain Your Case",
              img: "/images/img.png",
              desc: "Our Claim Consultant is available at the respective desk or you can email your claim details."
            },
            {
              title: "Claim Filed with Expert Help",
              img: "/images/img1.png",
              desc: "We assess your claim eligibility and guide you through correct documentation."
            },
            {
              title: "Maximize Claim Settlement",
              img: "/images/img3.png",
              desc: "Get 100% claim assistance and receive fair claim settlement."
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-xl"
            >
              <img src={step.img} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="relative py-24 px-8 text-center overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/20 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Help With Your Claim?
          </h2>

          <p className="text-lg mb-10 text-gray-200">
            Our expert team is ready to assist you anytime.
          </p>

          <Link
            to="/query"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition duration-300 shadow-lg"
          >
            Contact Consultant
          </Link>

        </motion.div>
      </section>

    </div>
  );
};

export default Home;
