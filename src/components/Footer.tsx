'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Dr. Murali BK', href: '#about' },
    { name: 'Hope Hospital', href: '#hope-hospital' },
    { name: 'Our Services', href: '#services' },
    { name: 'Patient Testimonials', href: '#testimonials' },
    { name: 'Health Articles', href: '#news' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const services = [
    'Joint Replacement Surgery',
    'Spine Surgery',
    'Arthroscopic Surgery',
    'Trauma & Emergency Care',
    'General Orthopedics',
    'Rehabilitation Services',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'Snapchat' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const professionalMemberships = [
    'Indian Orthopaedic Association',
    'Maharashtra Orthopaedic Association',
    'Indian Medical Association',
    'Medical Council of India',
    'International Society of Orthopaedic Surgery',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dr. Murali BK Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Dr. Murali BK</h3>
            <p className="text-gray-300 mb-6">
              Renowned orthopedic surgeon and founder of Hope Hospital, 
              dedicated to providing exceptional healthcare services in Central India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">dr.muralibk@hopehospital.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Vaishali Nagar, Nagpur</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Professional Memberships</h4>
            <ul className="space-y-2">
              {professionalMemberships.map((membership, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{membership}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Dr. Murali BK</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Dr. Murali BK. All rights reserved.</span>
              <Heart size={16} className="text-red-500" />
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-gray-950 border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center">
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only 
            and should not be considered as medical advice. Please consult with Dr. Murali BK or a qualified healthcare 
            professional for proper diagnosis and treatment. In case of medical emergencies, please contact emergency 
            services immediately.
          </p>
        </div>
      </div>

      {/* NABH Accreditation */}
      <div className="bg-blue-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">NABH</span>
            </div>
            <span className="text-sm">
              Hope Hospital is NABH (National Accreditation Board for Hospitals & Healthcare Providers) Accredited
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
