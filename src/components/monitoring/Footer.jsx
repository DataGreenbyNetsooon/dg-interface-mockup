import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <img src="/DataGreen_TextLogo.png" alt="DataGreen Logo" className="mx-auto md:mx-0" style={{ width: '200px' }}/>
          <p className="text-sm">&copy; 2025 DataGreen. All rights reserved.</p>
          <p className="text-xs">Empowering sustainable solutions through advanced data analysis.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram size={24} /></a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="/about" className="text-sm hover:text-gray-400">About Us</a>
          <a href="/services" className="text-sm hover:text-gray-400">Services</a>
          <a href="/contact" className="text-sm hover:text-gray-400">Contact</a>
          <a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a>
          <a href="/support" className="text-sm hover:text-gray-400">Support</a>
        </div>
        
        <div className="text-xs mt-4 md:mt-0">
          <p>Contact us: support@datagreen.com | +1 234 567 890</p>
          <p>Designed for the future of tool monitoring.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;