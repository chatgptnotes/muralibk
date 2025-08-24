'use client';

import { motion } from 'framer-motion';
import { Heart, Bone, Brain, Activity, Shield, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Joint Replacement Surgery',
      description: 'Advanced hip and knee replacement procedures using the latest technology and techniques.',
      features: ['Hip Replacement', 'Knee Replacement', 'Shoulder Replacement', 'Revision Surgery']
    },
    {
      icon: Bone,
      title: 'Spine Surgery',
      description: 'Minimally invasive spine procedures for various spinal conditions and disorders.',
      features: ['Disc Surgery', 'Spinal Fusion', 'Scoliosis Treatment', 'Back Pain Management']
    },
    {
      icon: Activity,
      title: 'Arthroscopic Surgery',
      description: 'Keyhole surgical techniques for joint problems with minimal scarring and faster recovery.',
      features: ['Knee Arthroscopy', 'Shoulder Arthroscopy', 'Ankle Arthroscopy', 'Sports Injuries']
    },
    {
      icon: Shield,
      title: 'Trauma & Emergency Care',
      description: '24/7 emergency orthopedic care for fractures, accidents, and acute injuries.',
      features: ['Fracture Treatment', 'Emergency Surgery', 'Accident Care', 'Critical Care']
    },
    {
      icon: Stethoscope,
      title: 'General Orthopedics',
      description: 'Comprehensive orthopedic care for various bone and joint conditions.',
      features: ['Pain Management', 'Physical Therapy', 'Rehabilitation', 'Preventive Care']
    },
    {
      icon: Brain,
      title: 'Specialized Procedures',
      description: 'Advanced surgical procedures for complex orthopedic conditions.',
      features: ['Pelvic Fractures', 'Complex Trauma', 'Pediatric Orthopedics', 'Geriatric Care']
    }
  ];

  const additionalServices = [
    'Burns Management & Treatment',
    'Emergency Medical Services',
    'Diagnostic Imaging (X-Ray, MRI, CT Scan)',
    'Laboratory Services',
    'Pharmacy Services',
    'Ambulance Services',
    'Patient Counseling',
    'Post-operative Care',
    'Rehabilitation Services',
    'Home Healthcare',
    'Telemedicine Consultations',
    'Health Check-up Packages'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive orthopedic and medical services delivered with expertise, 
            compassion, and the latest medical technology at Hope Hospital.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Services & Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our Services?</h3>
            <p className="text-xl opacity-90">
              Experience the difference that expertise, technology, and compassion make in healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield size={32} />
              </div>
              <h4 className="text-lg font-semibold mb-2">NABH Accredited</h4>
              <p className="text-sm opacity-90">Highest standards of healthcare quality</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Stethoscope size={32} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
              <p className="text-sm opacity-90">Experienced healthcare professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Activity size={32} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Advanced Technology</h4>
              <p className="text-sm opacity-90">State-of-the-art medical equipment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart size={32} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Patient-Centered</h4>
              <p className="text-sm opacity-90">Compassionate and personalized care</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Schedule Your Consultation?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today to book an appointment or learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Book Appointment
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
