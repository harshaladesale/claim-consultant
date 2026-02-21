import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
/* ---------------- SERVICES DATA ---------------- */
const servicesData = [
  {
    id: "life",
    title: "Life Insurance Claim",
    image:
      "/images/Life-Insurance.jpg",
    steps: [
      "Claim Intimation – The nominee or beneficiary informs the insurance company about the policyholder’s demise through an online portal, toll-free helpline, branch visit, or email.",
      "Document Submission – After claim registration, the nominee submits the required documents such as the death certificate, policy document, claim forms, KYC details, bank information, and any additional documents if required.",
      "Assessment & Verification – After claim registration, the nominee submits the required documents such as the death certificate, policy document, claim forms, KYC details, bank information, and any additional documents if required.",
      "Once verification is complete, the insurer releases the claim amount to the nominee within the regulatory timeline.",
    ],
  },

  {
    id: "mediclaim",
    title: "Mediclaim Claim",
    image:
      "/images/medicle.jpg",
    steps: [
      "Inform Insurer / TPA – Notify the insurance company or TPA (Third Party Administrator) as soon as hospitalization is planned or occurs. ",
      "Choose Cashless or Reimbursement - •	Cashless Claim: Treatment at a network hospital where bills are settled directly by the insurer.•	Reimbursement Claim: Treatment at a non-network hospital where expenses are paid by the insured first and later claimed.",
      "Submit Medical Documents & Bills - Provide necessary documents to the hospital desk or insurer, such as: •	Health card and policy details , Duly filled claim form, Doctor’s prescription and admission note ,Medical reports, investigation reports, and bills.",
      "Claim Processing & Verification - The insurer/TPA reviews the documents, verifies policy coverage, and may seek clarification or additional papers if required.",
      "Claim Approval / Settlement -•	Cashless Claim: Approved amount is settled directly with the hospital; the insured pays only non-covered expenses,Reimbursement Claim: Approved claim amount is credited to the insured’s bank account within the stipulated timeline.",
      "Claim Closure - Once payment is completed, the claim is officially closed and confirmation is shared with the insured.",
    ],
  },

  {
    id: "accident",
    title: "Personal Accident Claim",
    image:
      "/images/accident.jpg",
    steps: [
      "Immediate Intimation - Inform the insurance company as soon as the accident occurs. Intimation can be done through the insurer’s helpline, online portal, email, or nearest branch.",
      "Medical Treatment & Documentation - Seek immediate medical attention and retain all medical records, bills, prescriptions, and reports related to the injury",
      "Submit Claim Form - Submit the duly filled and signed claim form along with required documents to the insurer or TPA.",
      "Submit FIR / Medical Reports",
      "Assessment & Verification-The insurer verifies the documents, accident details, policy coverage, and may conduct an investigation if required",
      "Claim Settlement - After successful verification, the insurer approves and releases the claim amount as per policy terms and coverage.",
      "Claim Closure - Once payment is completed, the claim is officially closed and settlement confirmation is shared.",
    ],
  },

  {
    id: "vehicle",
    title: "Vehicle Insurance Claim",
    image:
      "/images/vehicle.jpg",
    steps: [
      "Immediate Intimation - Inform the insurance company immediately after the accident, theft, or damage. Intimation can be done via the insurer’s helpline, mobile app, website, or nearest branch",
      "FIR if Required - Lodge an FIR at the nearest police station in cases of theft, third-party injury/death, fire, or major accidents, as required by law.",
      "Survey & Inspection - The insurer appoints a surveyor to inspect the damaged vehicle. Do not repair the vehicle until the survey is completed, unless permitted by the insurer.",
      "Vehicle Repair - •	Cashless Claim: Get the vehicle repaired at a network garage where the insurer settles the bill directly. Reimbursement Claim: Repair the vehicle at a non-network garage and pay the bill first.",
      "Document Submission - Submit required documents such as: •	Claim form duly filled and signed Copy of RC, Driving License, and Insurance Policy •	FIR copy (if applicable) •	Repair estimate and final bills •	Survey report and photographs •	Bank details (for reimbursement claims) ",
      "Claim Approval & Settlement - After verification, the insurer approves the claim: •	Cashless: Approved amount is paid directly to the garage. •	Reimbursement: Approved amount is credited to the insured’s bank account.",
      "Claim Closure - Once payment is made, the claim is closed and confirmation is shared with the policyholder.",
    ],
  },

  {
    id: "society",
    title: "Society / Fire Insurance",
    image:
      "/images/fire.jpg",
    steps: [
      "Immediate Intimation - Inform the insurance company as soon as the loss or damage occurs (fire, water leakage, storm, lift damage, etc.). Intimation can be done via helpline, email, online portal, or through the society’s insurance advisor.",
      "Incident Reporting - Prepare an incident report detailing the date, time, cause, and extent of damage.•	Fire/Theft: Fire Brigade Report or Police FIR may be required.•	Natural Calamities: Local authority or weather-related documentation, if applicable.",
      "Loss Prevention - Take necessary steps to prevent further damage and secure the affected area. Do not discard damaged materials until the surveyor’s inspection is completed.",
      "Survey & Inspection - The insurer appoints a licensed surveyor to inspect the damaged property, assess the loss, and determine admissibility under the policy.",
      "Document Submission - Submit the required documents, which generally include: ",
      "Claim Approval - •	Duly filled claim form •	Society insurance policy copy •	Incident report and FIR/Fire Brigade report (if applicable) ",
      "Settlement & Closure - Once approved, the insurer releases the claim amount to the society as per policy terms and regulatory timelines.",
    ],
  },

  {
    id: "machinery",
    title: "Machinery Insurance Claim",
    image:
      "/images/machinery.jpg",
    steps: [
      "Immediate Intimation - Inform the insurance company immediately after the machinery breakdown or damage occurs. Intimation can be done through the insurer’s helpline, email, online portal, or via your insurance advisor.",
      "Stop Operations & Prevent Damage - Shut down the affected machinery and take all reasonable steps to prevent further loss or damage. Do not dismantle or repair the machinery without the insurer’s consent, except for temporary measures to reduce damage.",
      "Survey & Inspection - The insurer appoints a licensed surveyor to inspect the damaged machinery, identify the cause of breakdown, and assess the extent of loss.",
      "Documents Submission - Submit the required documents, which generally include: •	Duly filled claim form •	Machinery insurance policy copy •	Breakdown report from maintenance engineer •	Repair or replacement estimates •	Purchase invoice and machinery specifications •	Photographs of damaged parts •	Maintenance and service records ",
      "Claim Assessment -The insurer evaluates the surveyor’s report, verifies policy coverage, depreciation, and admissibility of the claim, and may seek additional details if required. ",
      "Repair / Replacement Approval -Upon approval, repairs or replacement of parts can be carried out as per the insurer’s guidelines and approved estimates.",
      "Settlement & Closure - After completion of repairs and submission of final bills, the insurer releases the claim amount as per policy terms within the prescribed timeline. ",
    ],
  },

  {
    id: "banking",
    title: "Banking Claims",
    image:
      "/images/banking.jpg",
    steps: [
      "Banking claim - Banking claims are handled differently depending on whether you are reporting an unauthorised transaction, claiming funds from a deceased person's account, or recovering unclaimed deposits. ",
      "Reporting Unauthorised Transactions (Fraud)-If you notice a transaction you did not authorise, you must act immediately to minimize your liability. ",
      "Deceased Account Settlement",
      "Locker Claim Process",
      "Reclaim Unclaimed Deposits",
    ],
  },

  {
    id: "postal",
    title: "Postal Scheme Claims",
    image:
      "/images/postal.png",
    steps: [
      "Inform Post Office - The nominee or beneficiary must inform the concerned Post Office immediately about the death or maturity of the policy/scheme. Intimation can be done by visiting the branch where the account or policy is held.",
      "Fill Claim Forms - Collect the prescribed claim forms from the Post Office and fill them accurately. Forms vary depending on the scheme (PLI, RPLI, MIS, NSC, KVP, Savings Account, etc.).",
      "Submit Required Documents - Submit the completed claim form along with the following documents: •	Death Certificate (in case of death claim) •	Original policy certificate / passbook / certificate •	Identity and address proof of the nominee •	Nomination details (if available) •	Bank account details for payment •	Succession certificate or legal heir certificate (if nomination is not registered)",
      "Verification by Postal Authorities - The Post Office verifies the documents, policy or account status, and nomination details. In some cases, additional verification or inquiry may be conducted.",
      "Claim Approval - After successful verification, the claim is approved as per the applicable postal scheme rules.",
      "Settlement & Closure-The approved claim amount is paid to the nominee or legal heir through bank transfer or post office account credit within the prescribed timeline.",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-linear-to-b from-slate-50 to-blue-50 min-h-screen">
      
    
<section className="relative overflow-hidden bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 text-white py-28 text-center">

  {/* Animated circles */}
  <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
  <div className="absolute w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-5xl md:text-6xl font-bold mb-6"
  >
    Our Claim Services
  </motion.h1>

  <p className="max-w-xl mx-auto text-lg text-gray-200 mb-8">
    We provide professional guidance to ensure fast, transparent,
    and hassle-free insurance claim settlements.
  </p>


  

</section>


      {/* ---------------- SERVICES SECTIONS ---------------- */}

      {servicesData.map((service, index) => (
        <section key={service.id} id={service.id} className="py-24 px-6 md:px-16">

          <div
            className={`flex flex-col md:flex-row gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* ---------------- IMAGE ---------------- */}

            <motion.img
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            src={service.image}
            className="w-full md:w-[45%] h-100 md:h-125 rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500"
            />


            {/* ---------------- CONTENT ---------------- */}

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[55%]"
            >

              <h2 className="text-4xl font-bold text-blue-900 mb-10">
                {service.title}
              </h2>

              {/* Step Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

                {service.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-white/70 backdrop-blur-md border border-white shadow-xl p-6 rounded-2xl transition"
                  >

                    {/* Step Number */}
                    <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-linear-to-r from-blue-800 to-cyan-500 text-white flex items-center justify-center font-bold shadow-lg">
                      {i + 1}
                    </div>

                    <p className="text-gray-700 text-[15px] leading-relaxed">
                      {step}
                    </p>

                  </motion.div>
                ))}

              </div>

            </motion.div>

          </div>
        </section>
      ))}

      {/* ---------------- CTA SECTION ---------------- */}

      <section className="bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 text-white text-center py-20">

        <h2 className="text-4xl font-bold mb-4">
          Need Help With Your Claim?
        </h2>

        <p className="mb-8 text-gray-200">
          Our experts are ready to assist you with documentation and settlement.
        </p>

        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Contact Our Experts
        </button>

      </section>

    </div>
  );
};

export default Services;
