
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-caviscan-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-caviscan-blue">
                Caviscan<span className="text-caviscan-teal">.</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6">
              A machine learning approach to detect dental cavity from images.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/mainak1023/Cavi-Scan" className="text-gray-600 hover:text-caviscan-teal transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-caviscan-teal transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:mainak1112@gmail.com" className="text-gray-600 hover:text-caviscan-teal transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="#demo" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Documentation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/documentation#overview" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  Project Overview
                </Link>
              </li>
              <li>
                <Link to="/documentation#technical" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  Technical Details
                </Link>
              </li>
              <li>
                <Link to="/documentation#usage" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  Usage Guide
                </Link>
              </li>
              <li>
                <Link to="/documentation#research" className="text-gray-600 hover:text-caviscan-blue transition-colors">
                  Research Papers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-2">S S M & Cavi-Scan Ent.</p>
              <p className="mb-2">Durgapur</p>
              <p className="mb-4">West Bengal</p>
              <p className="mb-2">
                <a href="mailto:mainak1112@gmail.com" className="hover:text-caviscan-blue transition-colors">
                  mainak1112@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+918629997123" className="hover:text-caviscan-blue transition-colors">
                  +91 8629997123
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Cavi-Scan Project. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-caviscan-blue text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-caviscan-blue text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
