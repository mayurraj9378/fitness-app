import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-3xl font-bold">
              Fit<span className="text-red-500">Zone</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Transform your body and mind with us.
            </p>
          </div>

          <div className="flex gap-5 text-2xl">
            <a
              href="#"
              className="hover:text-red-500 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-red-500 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="hover:text-red-500 transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 FitZone. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
