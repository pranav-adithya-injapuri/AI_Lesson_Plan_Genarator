import React from 'react';
import { motion } from 'framer-motion';

const themes = [
  'Animals', 'Farm Animals', 'Fruits', 'Vegetables', 
  'Transportation', 'Seasons', 'Community Helpers', 
  'Colors', 'Shapes', 'Birds'
];

const Sidebar = ({ onSelectTheme, isMobileOpen, setIsMobileOpen }) => {
  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <motion.aside 
        className={`fixed lg:static inset-y-0 left-0 bg-white w-64 border-r border-gray-200 p-6 z-40 transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <h3 className="text-lg font-bold text-gray-700 mb-6 uppercase tracking-wider">Quick Themes</h3>
        <div className="flex flex-col space-y-3">
          {themes.map(theme => (
            <button
              key={theme}
              onClick={() => {
                onSelectTheme(theme);
                if (setIsMobileOpen) setIsMobileOpen(false);
              }}
              className="text-left px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 text-gray-600 font-medium"
            >
              {theme}
            </button>
          ))}
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
