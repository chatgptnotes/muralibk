'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 712 123 4567',
        '+91 98765 43210'
      ],
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'dr.muralibk@hopehospital.com',
        'info@hopehospital.com'
      ],
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Hospital Address',
      details: [
        'Hope Hospital',
        'Vaishali Nagar, Nagpur',
        'Maharashtra - 440022'
      ],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Consultation Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 2:00 PM',
        'Emergency: 24/7'
      ],
      color: 'orange'
    }
  ];

  const services = [
    'Appointment Booking',
    'Emergency Care',
    'Second Opinion',
    'Insurance Queries',
    'General Inquiries',
    'Feedback & Complaints'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Dr. Murali BK and the Hope Hospital team. 
              We&apos;re here to help with appointments, consultations, and any questions you may have.
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a service</option>
                    {services.map((service, index) => (
                      <option key={index}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry or appointment request..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${info.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon size={24} className={`text-${info.color}-600`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Location</h4>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Hope Hospital</p>
                  <p className="text-gray-500 text-sm">Vaishali Nagar, Nagpur</p>
                  <p className="text-gray-500 text-sm">Maharashtra - 440022</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white"
            >
              <h4 className="text-lg font-semibold mb-4">Need Immediate Assistance?</h4>
              <p className="mb-4 opacity-90">
                For urgent medical concerns or emergency situations, 
                please call our emergency hotline immediately.
              </p>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span className="font-semibold text-lg">+91 98765 43210</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MessageSquare size={32} className="text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Online Consultation</h4>
            <p className="text-gray-600">
              Schedule virtual consultations with Dr. Murali BK for initial assessments.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock size={32} className="text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Emergency Care</h4>
            <p className="text-gray-600">
              Round-the-clock emergency medical services available at Hope Hospital.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone size={32} className="text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Appointment Booking</h4>
            <p className="text-gray-600">
              Easy appointment scheduling through phone, email, or online booking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
