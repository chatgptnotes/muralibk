'use client';

import { motion } from 'framer-motion';
import { Building2, Shield, Users, Award, Heart, Stethoscope, Clock, Star } from 'lucide-react';

const HopeHospital = () => {
  const specialties = [
    { icon: Heart, title: 'Orthopedics', description: 'Advanced joint replacement and spine surgery' },
    { icon: Stethoscope, title: 'Emergency Care', description: '24/7 emergency medical services' },
    { icon: Shield, title: 'Burns Management', description: 'Specialized burn care and treatment' },
    { icon: Users, title: 'Super Specialties', description: 'Comprehensive specialized medical care' },
  ];

  const facilities = [
    { icon: Building2, title: 'State-of-the-art Infrastructure', description: 'Modern medical equipment and facilities' },
    { icon: Award, title: 'NABH Accredited', description: 'National Accreditation Board for Hospitals & Healthcare Providers' },
    { icon: Clock, title: '24/7 Care', description: 'Round-the-clock medical attention and support' },
    { icon: Star, title: 'Expert Team', description: 'Experienced healthcare professionals' },
  ];

  const teamHighlights = [
    'Experienced orthopedic specialists',
    'Dedicated nursing staff',
    'Advanced surgical team',
    'Patient care coordinators',
    'Emergency response team',
    'Rehabilitation specialists',
  ];

  return (
    <section id="hope-hospital" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hope Hospital
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A NABH-accredited, multispecialty hospital offering advanced medical care 
            in Central India, founded by Dr. Murali BK with a vision of excellence.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">Mission</h4>
                <p className="text-gray-600">
                  To provide world-class healthcare services with compassion, 
                  innovation, and excellence, making advanced medical care 
                  accessible to the community of Central India.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">Vision</h4>
                <p className="text-gray-600">
                  To be the leading healthcare institution in Central India, 
                  recognized for clinical excellence, patient safety, and 
                  innovative medical solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hospital Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 size={40} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Hope Hospital</h4>
                <p className="text-gray-600 mb-4">Nagpur, Maharashtra</p>
                <div className="flex justify-center items-center gap-2 text-blue-600">
                  <Award size={20} />
                  <span className="font-semibold">NABH Accredited</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Specialties
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <specialty.icon size={24} className="text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{specialty.title}</h4>
                <p className="text-gray-600 text-center text-sm">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            World-Class Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <facility.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h4>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team and Patient Care */}
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h3>
            <p className="text-gray-600 mb-6">
              Hope Hospital is staffed with experienced healthcare professionals 
              dedicated to providing the highest quality of care to our patients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {teamHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Patient Care Approach
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Compassionate Care</h4>
                <p className="text-gray-600">
                  We believe in treating every patient with dignity, respect, 
                  and personalized attention throughout their healthcare journey.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-green-600 mb-2">Advanced Technology</h4>
                <p className="text-gray-600">
                  State-of-the-art medical equipment and facilities ensure 
                  the highest standards of diagnosis and treatment.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Holistic Treatment</h4>
                <p className="text-gray-600">
                  Comprehensive care that addresses not just the physical 
                  condition but also the emotional and psychological well-being.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HopeHospital;
