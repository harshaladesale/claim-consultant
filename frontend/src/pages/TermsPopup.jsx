import { useState } from "react";

const TermsPopup = ({ onAccept }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">

      <div className="bg-white max-w-3xl w-full p-6 rounded-xl shadow-2xl max-h-[80vh] overflow-y-auto">

        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Terms & Conditions
        </h2>

        <p className="mb-4">
          Welcome to Claim Consultant Services. By accessing or using our website
          and claim consultancy services, you agree to comply with the following Terms & Conditions.
        </p>

        <h3 className="font-semibold mt-4">Nature of Services</h3>
        <p>
          We provide claim consultancy, advisory, documentation support, and follow-up services.
          We are not an insurance company or financial institution.
        </p>

        <h3 className="font-semibold mt-4">Client Responsibility</h3>
        <ul className="list-disc pl-6">
          <li>Provide correct information</li>
          <li>Submit required documents</li>
          <li>Cooperate during claim process</li>
        </ul>

        <h3 className="font-semibold mt-4">Fees & Charges</h3>
        <p>Consultancy fees once paid are non-refundable.</p>

        <h3 className="font-semibold mt-4">Disclaimer</h3>
        <p>
          We provide consultancy services only. Final approval depends on the
          insurance company or authority.
        </p>

        {/* Checkbox */}
        <div className="flex items-center gap-2 mt-6">
          <input
            type="checkbox"
            onChange={() => setChecked(!checked)}
          />
          <label>I Agree to Terms & Conditions</label>
        </div>

        {/* Button */}
        <button
          disabled={!checked}
          onClick={onAccept}
          className={`mt-4 w-full py-3 rounded-lg font-semibold ${
            checked
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue to Website
        </button>

      </div>
    </div>
  );
};

export default TermsPopup;
