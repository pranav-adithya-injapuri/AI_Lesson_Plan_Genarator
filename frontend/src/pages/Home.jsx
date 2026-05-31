import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaPalette, FaMusic, FaFileAlt, FaClipboardList } from 'react-icons/fa';

const features = [
  { id: 1, title: 'AI Lesson Plans', icon: <FaBrain className="text-4xl text-primary" />, desc: 'Instant, structured plans.' },
  { id: 2, title: 'Creative Activities', icon: <FaPalette className="text-4xl text-secondary" />, desc: 'Fun and engaging.' },
  { id: 3, title: 'Rhymes & Songs', icon: <FaMusic className="text-4xl text-accent" />, desc: 'Age-appropriate music.' },
  { id: 4, title: 'Worksheet Ideas', icon: <FaFileAlt className="text-4xl text-blue-500" />, desc: 'Ready-to-use concepts.' },
  { id: 5, title: 'Materials Checklist', icon: <FaClipboardList className="text-4xl text-pink-500" />, desc: 'Never forget a thing.' }
];

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-text-main mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Create Preschool Lesson Plans in Seconds
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Generate engaging activities, rhymes, worksheets and lesson plans instantly with AI.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/generate" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition shadow-lg">
            Generate Lesson Plan
          </Link>
          <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition shadow-sm">
            Watch Demo
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id}
                className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
