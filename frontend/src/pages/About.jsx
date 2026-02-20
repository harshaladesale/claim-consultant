import { motion } from "framer-motion";
import SEO from "../components/SEO";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 }
  }
};

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">
       <SEO
              title="About page"
              description="Professional insurance claim consultancy services. Fast processing and expert guidance."
            />
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 text-white py-28 text-center overflow-hidden">

        {/* Floating Glow Shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1 className="text-5xl font-bold mb-6">
            About ClaimConsultant
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Delivering professional, transparent and stress-free claim assistance.
          </p>
        </motion.div>
      </section>

      {/* ABOUT CONTENT */}
<section className="py-24 px-8 md:px-20 grid md:grid-cols-2 gap-14 items-center">

  {/* IMAGE */}
  <motion.img
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    src="/images/about.png"
    className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
  />

  {/* TEXT CONTENT */}
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="space-y-8"
  >

    {/* Professional */}
    <div>
      <h2 className="text-3xl font-bold text-blue-900 mb-3">
        Professional & Trust-Focused
      </h2>

      <p className="leading-8 text-gray-600">
        We are a dedicated claim consulting team committed to guiding individuals
        and institutions through every stage of the insurance claim process.
        We ensure proper documentation, follow-ups and fair claim settlements.
      </p>
    </div>

    {/* Client Friendly */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-blue-800 mb-3">
        Client-Friendly & Supportive
      </h2>

      <p className="leading-8 text-gray-600">
        Insurance claims can be complex and stressful. As experienced Claim
        Consultants, we stand by your side — from claim intimation to final
        settlement — helping you understand eligibility, prepare the right
        documents, and receive the claim amount you deserve.
      </p>
    </div>

    {/* Expertise */}
    <div className="bg-cyan-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-blue-800 mb-3">
        Strong & Expertise-Driven
      </h2>

      <p className="leading-8 text-gray-600">
        Our role as Claim Consultants is to represent your interests. We analyze
        policy coverage, manage documentation, coordinate with insurers, and
        actively follow up to ensure smooth and transparent claim resolution.
      </p>
    </div>

  </motion.div>

</section>


      {/* MISSION & VISION */}
      <section className="bg-white py-24 px-8 md:px-20">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >

          {[
            {
              title: "Our Mission",
              desc: "To simplify the claim process and provide reliable guidance that ensures fair and timely claim settlements."
            },
            {
              title: "Our Vision",
              desc: "To become the most trusted claim consultancy platform delivering transparent and technology-driven claim solutions."
            }
          ].map((item, index) => (

            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-linear-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>

            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* STATISTICS */}
      <section className="bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 text-white py-24">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-12"
        >

          {[
            { number: "500+", label: "Claims Processed" },
            { number: "300+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" }
          ].map((item, index) => (

            <motion.div key={index} variants={fadeUp}>
              <h2 className="text-5xl font-bold mb-2">
                {item.number}
              </h2>
              <p className="text-gray-200">{item.label}</p>
            </motion.div>

          ))}

        </motion.div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 px-8 md:px-20">

        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
          Our Claim Process
        </h2>

        <div className="relative border-l-4 border-blue-800 pl-10 space-y-14 max-w-3xl mx-auto">

          {[
            "Understand Your Claim Case",
            "Documentation & Filing Support",
            "Settlement & Follow-Up"
          ].map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-6 top-2 w-5 h-5 bg-blue-800 rounded-full"></div>

              <h3 className="text-xl font-bold mb-2">
                Step {index + 1}
              </h3>

              <p className="text-gray-600">{step}</p>
            </motion.div>

          ))}

        </div>

      </section>

      {/* TEAM */}
      <section className="bg-white py-24 px-8 md:px-20">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
          Meet Our Experts
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >

          {["Consultant", "Documentation Expert", "Claim Analyst"].map(
            (role, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.07 }}
                className="text-center bg-gray-100 p-10 rounded-3xl shadow-lg"
              >
                <img
                  src="/images/about1.jpg"
                  className="w-38 mx-auto mb-6"
                />

                <h3 className="font-bold text-lg">{role}</h3>
                <p className="text-sm text-gray-600">
                  Experienced professional ensuring smooth claim settlement.
                </p>
              </motion.div>
            )
          )}

        </motion.div>

      </section>

    </div>
  );
};

export default About;
