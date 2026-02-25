import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            ClaimConsultant
          </h2>

          <p className="text-sm leading-6">
            ClaimConsultant provides comprehensive, end-to-end claim assistance services, ensuring a smooth, transparent, and hassle-free claim settlement experience for clients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-900">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li>
              <Link to="/about" className="hover:text-blue-700 transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-blue-700 transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-700 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-900">
            Contact
          </h3>

          <p className="mb-2">📞 +91 98901 84552</p>
          <p className="mb-2">✉branch03343@gmail.com</p>
          <p className="text-sm">
            Gaurisha claim consultant
            223 3rd floor above Dr. Kharkhar Clinic Thakur arcade opp virar railway station Virar West
          </p>
        </div>

        {/* Disclaimer */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-900">
            Disclaimer
          </h3>

          <p className="text-sm leading-6">
            ClaimConsultant provides comprehensive, end-to-end claim assistance services, ensuring a smooth, transparent, and hassle-free claim settlement experience for clients.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
     <div className="border-t border-gray-300 mt-10 pt-6 flex justify-between items-center flex-wrap text-sm">

        <p>
        © 2026 ClaimConsultant. All rights reserved.
        </p>
        <p className="text-center text-sm">
  Designed & Developed by{" "}
  <a
    href="https://localvocalizetechnology.tech/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 font-semibold hover:underline"
  >
    Localvocalize
  </a>
</p>
        
     </div>

    </footer>
  );
};

export default Footer;
