import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1 className="text-2xl font-bold text-white">🐾 Pets House</h1>

          <p className="mt-4 text-gray-400">
            Find your perfect companion and give pets a loving home. Adoption
            brings happiness to both humans and animals.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>

          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:text-amber-400">
              Home
            </Link>
            <Link href="/allpets" className="hover:text-amber-400">
              All Pets
            </Link>
            <Link href="/addpet" className="hover:text-amber-400">
              Add Pet
            </Link>
            <Link href="/myrequests" className="hover:text-amber-400">
              My Requests
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>

          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-gray-100">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Pets House. All rights reserved.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        Made with ❤️ for pet lovers
      </div>
    </footer>
  );
};

export default FooterPage;
