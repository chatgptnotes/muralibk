'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, FileText, TrendingUp, Lightbulb } from 'lucide-react';

const NewsInsights = () => {
  const articles = [
    {
      title: 'Understanding Joint Replacement Surgery: What You Need to Know',
      excerpt: 'A comprehensive guide to joint replacement procedures, recovery, and what to expect before and after surgery.',
      category: 'Orthopedics',
      date: 'March 15, 2024',
      readTime: '5 min read',
      featured: true
    },
    {
      title: 'Preventing Back Pain: Tips for a Healthy Spine',
      excerpt: 'Practical advice on maintaining spine health and preventing common back problems through lifestyle changes.',
      category: 'Spine Health',
      date: 'March 10, 2024',
      readTime: '4 min read',
      featured: false
    },
    {
      title: 'The Future of Orthopedic Surgery: AI and Robotics',
      excerpt: 'Exploring how artificial intelligence and robotic assistance are revolutionizing orthopedic procedures.',
      category: 'Technology',
      date: 'March 5, 2024',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'Sports Injuries: Prevention and Treatment Strategies',
      excerpt: 'Essential information for athletes and active individuals on preventing and managing sports-related injuries.',
      category: 'Sports Medicine',
      date: 'February 28, 2024',
      readTime: '7 min read',
      featured: false
    },
    {
      title: 'Arthroscopic Surgery: Minimally Invasive Solutions',
      excerpt: 'Understanding the benefits and applications of arthroscopic procedures for joint problems.',
      category: 'Surgery',
      date: 'February 20, 2024',
      readTime: '5 min read',
      featured: false
    },
    {
      title: 'Rehabilitation After Orthopedic Surgery: A Complete Guide',
      excerpt: 'Step-by-step rehabilitation protocols for optimal recovery after orthopedic procedures.',
      category: 'Rehabilitation',
      date: 'February 15, 2024',
      readTime: '8 min read',
      featured: false
    }
  ];

  const healthTips = [
    {
      icon: TrendingUp,
      title: 'Exercise Regularly',
      description: 'Maintain joint flexibility and strength through regular, low-impact exercises.'
    },
    {
      icon: Lightbulb,
      title: 'Maintain Good Posture',
      description: 'Practice proper posture to prevent spine and joint problems.'
    },
    {
      icon: FileText,
      title: 'Stay Informed',
      description: 'Keep up with the latest developments in orthopedic care and treatment options.'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & Health Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest health tips, medical updates, and expert insights 
            from Dr. Murali BK and the Hope Hospital team.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-green-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <FileText size={64} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h3>
                  <p className="text-gray-600">Latest insights from Dr. Murali BK</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {articles[0].category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={16} />
                    {articles[0].date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock size={16} />
                    {articles[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {articles[0].excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Read Full Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Articles & Updates
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Health Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Health Tips from Dr. Murali BK
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {healthTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <tip.icon size={32} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h4>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Health Insights</h3>
          <p className="text-xl opacity-90 mb-6">
            Subscribe to receive the latest health tips and medical updates from Dr. Murali BK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsInsights;
