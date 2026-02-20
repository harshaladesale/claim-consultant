import { FaWhatsapp, FaInstagram, FaHeadset } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed right-5 bottom-10 flex flex-col gap-4 z-50">

      {/* Call */}
      <a
      href="tel:+919890184552"
      title="Call Now"
      className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
      <FaHeadset size={28} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919890184552"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Instagram */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="bg-linear-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaInstagram size={28} />
      </a>

    </div>
  );
};

export default SocialIcons;
