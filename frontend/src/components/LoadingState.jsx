import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "🧠 Generating Lesson Plan...",
  "🎨 Creating Activities...",
  "🎵 Finding Rhymes...",
  "📝 Preparing Worksheet Ideas...",
  "✂️ Building Materials Checklist..."
];

const LoadingState = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mb-8"
      />
      <div className="h-8 relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-medium text-gray-600 absolute"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoadingState;
