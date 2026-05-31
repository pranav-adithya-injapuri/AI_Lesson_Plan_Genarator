import React from 'react';
import { motion } from 'framer-motion';

const LessonCard = ({ title, content, delay = 0 }) => {
  if (!content || (Array.isArray(content) && content.length === 0)) return null;

  const renderContent = (data) => {
    if (!data) return null;
    if (Array.isArray(data)) {
      return (
        <ul className="list-disc pl-5 space-y-2 mt-2">
          {data.map((item, i) => (
            <li key={i}>{renderContent(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof data === 'object') {
      return (
        <div className="space-y-3 mt-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
          {Object.entries(data).map(([key, value]) => {
            const formattedKey = key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase());
            return (
              <div key={key}>
                <strong className="text-gray-800">{formattedKey}:</strong> {renderContent(value)}
              </div>
            );
          })}
        </div>
      );
    }
    return <span>{data}</span>;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6 hover:shadow-md transition"
    >
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <div className="text-gray-700 leading-relaxed whitespace-pre-wrap font-medium">
        {renderContent(content)}
      </div>
    </motion.div>
  );
};

export default LessonCard;
