'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      age: 65,
      treatment: 'Knee Replacement Surgery',
      rating: 5,
      text: 'Dr. Murali BK performed my knee replacement surgery with exceptional skill. The entire process was smooth, and I was back to walking without pain within weeks. His expertise and compassionate care made all the difference.',
      location: 'Nagpur'
    },
    {
      name: 'Priya Sharma',
      age: 45,
      treatment: 'Spine Surgery',
      rating: 5,
      text: 'After suffering from severe back pain for years, Dr. Murali BK\'s minimally invasive spine surgery gave me a new lease on life. The team at Hope Hospital was professional and caring throughout my recovery.',
      location: 'Nagpur'
    },
    {
      name: 'Amit Patel',
      age: 52,
      treatment: 'Hip Replacement',
      rating: 5,
      text: 'Dr. Murali BK is truly a master of his craft. My hip replacement surgery was successful, and the rehabilitation program was excellent. I highly recommend him and Hope Hospital for orthopedic care.',
      location: 'Nagpur'
    },
    {
      name: 'Sunita Deshmukh',
      age: 58,
      treatment: 'Arthroscopic Surgery',
      rating: 5,
      text: 'The arthroscopic surgery performed by Dr. Murali BK was life-changing. Minimal scarring, quick recovery, and excellent results. The staff at Hope Hospital was supportive and professional.',
      location: 'Nagpur'
    },
    {
      name: 'Vikram Singh',
      age: 40,
      treatment: 'Sports Injury Treatment',
      rating: 5,
      text: 'As an athlete, I was worried about my career after a serious injury. Dr. Murali BK\'s treatment and rehabilitation program got me back to sports in record time. Outstanding care!',
      location: 'Nagpur'
    },
    {
      name: 'Meera Iyer',
      age: 70,
      treatment: 'Complex Fracture Treatment',
      rating: 5,
      text: 'When I had a complex pelvic fracture, Dr. Murali BK\'s expertise saved me from permanent disability. His surgical skills and the care at Hope Hospital are world-class.',
      location: 'Nagpur'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Successful Surgeries' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '33+', label: 'Years of Experience' },
    { number: 'NABH', label: 'Accredited Hospital' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Patient Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients who have experienced exceptional care 
            from Dr. Murali BK and the Hope Hospital team.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote size={24} className="text-blue-600" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Patient Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} years • {testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-6">
            <Quote size={48} className="text-white/80 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Trusted by Thousands of Patients</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
                             <p className="text-lg mb-4 italic">
                 &ldquo;Dr. Murali BK&apos;s expertise in orthopedic surgery is unmatched. 
                 His dedication to patient care and surgical precision has made 
                 Hope Hospital the go-to destination for orthopedic treatment in Central India.&rdquo;
               </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Medical Community</h4>
                  <p className="text-white/80">Healthcare Professionals</p>
                </div>
              </div>
            </div>
            
            <div>
                             <p className="text-lg mb-4 italic">
                 &ldquo;The combination of advanced technology, skilled medical professionals, 
                 and compassionate care makes Hope Hospital stand out. Dr. Murali BK&apos;s 
                 leadership has created a center of excellence.&rdquo;
               </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">HH</span>
                </div>
                <div>
                  <h4 className="font-semibold">Hospital Administration</h4>
                  <p className="text-white/80">Healthcare Management</p>
                </div>
              </div>
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
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same exceptional care that has helped thousands of patients 
              regain their mobility and quality of life.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Schedule Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
