import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-3">
            GreenAura
          </h2>
          <p className="text-sm leading-relaxed">
            GreenAura helps you bring nature indoors with healthy plants,
            expert care tips, and sustainable solutions for greener living.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="link link-hover">Home</Link>
            </li>
            <li>
              <Link to="/plants" className="link link-hover">Plants</Link>
            </li>
            <li>
              <Link to="/profile" className="link link-hover">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="link link-hover">Plant Care Tips</li>
            <li className="link link-hover">FAQs</li>
            <li className="link link-hover">Contact Us</li>
            <li className="link link-hover">Privacy Policy</li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
          <p className="text-sm mb-4">
            Email: support@greennest.com
          </p>
          <div className="flex gap-4">
            <a className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} GreenAura. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
