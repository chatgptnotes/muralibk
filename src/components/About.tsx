'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Target, Users, Clock } from 'lucide-react';

const About = () => {
  const qualifications = [
    { degree: 'MBBS', institution: 'Government Medical College, Nagpur', year: '1992' },
    { degree: 'MS (Orthopedics)', institution: 'University of Mysore', year: '1997' },
    { degree: 'MCH', institution: 'Advanced Training', year: 'Specialized' },
  ];

  const awards = [
    { title: 'IIGP National Award', description: 'Recognition for excellence in orthopedic care' },
    { title: 'Lokmat Global Convention Award', description: 'Outstanding contribution to healthcare' },
  ];

  const expertise = [
    { icon: Heart, title: 'Joint Replacement', description: 'Advanced hip and knee replacements' },
    { icon: Target, title: 'Spine Surgery', description: 'Minimally invasive spine procedures' },
    { icon: Users, title: 'Arthroscopic Surgery', description: 'Keyhole surgical techniques' },
    { icon: Clock, title: 'Complex Fractures', description: 'Pelvic and complex trauma care' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Dr. Murali BK
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visionary orthopedic surgeon dedicated to transforming lives through 
            advanced medical care and compassionate patient treatment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A Legacy of Excellence
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Dr. Murali BK is a renowned orthopedic surgeon with over 33 years of 
                experience in the field of orthopedics. As the Founder and Managing 
                Director of Hope Hospital, he has established a center of excellence 
                for orthopedic care in Central India.
              </p>
              <p>
                His journey began at Government Medical College, Nagpur, where he 
                completed his MBBS in 1992, followed by specialized training in 
                Orthopedics at the University of Mysore, earning his MS degree in 1997.
              </p>
              <p>
                Dr. Murali BK is recognized for embracing cutting-edge medical technology, 
                including minimally invasive techniques and AI-driven diagnostics. 
                He has performed thousands of successful surgeries and is highly 
                trusted for his expertise and patient-centered approach to care.
              </p>
            </div>
          </motion.div>

          {/* Image Placeholder */}
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
                  <GraduationCap size={40} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Medical Philosophy</h4>
                <p className="text-gray-600">
                  &ldquo;Compassion, excellence, and innovation in healthcare, 
                  with a focus on improving lives through patient-centric 
                  orthopedic care.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Qualifications & Education
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{qual.degree}</h4>
                <p className="text-gray-600 mb-2">{qual.institution}</p>
                <p className="text-blue-600 font-semibold">{qual.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h4>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{item.title}</h4>
                <p className="text-gray-600 text-center text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
