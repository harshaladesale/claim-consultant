const TermsPopup = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      
      <div className="bg-white max-w-2xl w-full p-6 rounded-xl shadow-lg max-h-[80vh] flex flex-col">

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Terms & Conditions
        </h2>

        {/* Scrollable Content */}
        <div className="text-sm text-gray-700 overflow-y-auto pr-2 space-y-4">

          <p>
            Welcome to Claim Consultant Services. By accessing or using our website and claim consultancy services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services.
          </p>

          <h3 className="font-semibold text-blue-800">2. Nature of Services</h3>
          <p>
            We provide claim consultancy, advisory, documentation support, and follow-up services for insurance and savings scheme claims.
          </p>
          <ul className="list-disc pl-5">
            <li>We are not an insurance company, post office, or financial institution.</li>
            <li>Final claim approval or rejection depends on the concerned authority or insurance company.</li>
          </ul>

          <h3 className="font-semibold text-blue-800">3. Client Responsibility</h3>
          <ul className="list-disc pl-5">
            <li>Provide true, correct, and complete information.</li>
            <li>Submit required documents on time.</li>
            <li>Inform us about claim updates.</li>
            <li>Cooperate during processing.</li>
          </ul>

          <p>
            We are not responsible for delays due to incomplete or incorrect information.
          </p>

          <h3 className="font-semibold text-blue-800">4. Fees & Charges</h3>
          <ul className="list-disc pl-5">
            <li>Consultancy fees will be communicated before service.</li>
            <li>Fees may be fixed or percentage based.</li>
            <li>Fees once paid are non-refundable.</li>
            <li>Government or third-party charges are separate.</li>
          </ul>

          <h3 className="font-semibold text-blue-800">5. No Guarantee Clause</h3>
          <ul className="list-disc pl-5">
            <li>We provide professional assistance.</li>
            <li>We do not guarantee claim approval.</li>
            <li>Authority decision is final.</li>
          </ul>

          <h3 className="font-semibold text-blue-800">6. Limitation of Liability</h3>
          <ul className="list-disc pl-5">
            <li>We are not liable for claim rejection due to policy rules or misrepresentation.</li>
            <li>We are not responsible for delays from external authorities.</li>
            <li>Our liability is limited to consultancy fees paid.</li>
          </ul>

          <h3 className="font-semibold text-blue-800">7. Confidentiality</h3>
          <p>
            All client data and documents are strictly confidential and only shared if required for claim processing or legal reasons.
          </p>

          <h3 className="font-semibold text-blue-800">8. Cancellation & Termination</h3>
          <ul className="list-disc pl-5">
            <li>Either party can terminate services with written notice.</li>
            <li>Fees for completed services remain payable.</li>
            <li>We may stop service in case of misconduct or false information.</li>
          </ul>

          <h3 className="font-semibold text-blue-800">9. Website Usage</h3>
          <ul className="list-disc pl-5">
            <li>Website content is for informational purposes only.</li>
            <li>Unauthorized copying is prohibited.</li>
            <li>We are not responsible for temporary technical downtime.</li>
          </ul>

          <h3 className="font-semibold text-blue-800">10. Governing Law</h3>
          <p>
            These Terms & Conditions are governed by the laws of India. Disputes are subject to local court jurisdiction.
          </p>

          <h3 className="font-semibold text-blue-800">11. Disclaimer</h3>
          <p>
            Claim consultancy does not replace legal advice. Clients must read policy documents carefully. We act as independent consultants and not as agents of any insurance company unless specified.
          </p>

        </div>

        {/* Button */}
        <button
          onClick={onAccept}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          I Agree & Continue
        </button>

      </div>
    </div>
  );
};

export default TermsPopup;
