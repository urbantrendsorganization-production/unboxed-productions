import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#282665] to-[#000000] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ABOUT */}
        <div>
          <div className="text-white font-semibold mb-4">About Us</div>
          <p className="text-gray-300 text-sm">
            Unboxed Productions is a full-service events agency delivering
            world-class experiences and corporate productions.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <div className="text-white font-semibold mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Corporate Events</li>
            <li className="hover:text-white cursor-pointer">Stage Productions</li>
            <li className="hover:text-white cursor-pointer">Conference Setup</li>
            <li className="hover:text-white cursor-pointer">Live Performances</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <div className="text-white font-semibold mb-4">Contact</div>
          <p className="text-sm">Email: info@unboxedproductions.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <p className="text-sm">Address: 123 Main St, City, Country</p>
        </div>

        {/* SOCIAL */}
        <div>
          <div className="text-white font-semibold mb-4">Follow Us</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Unboxed Productions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
