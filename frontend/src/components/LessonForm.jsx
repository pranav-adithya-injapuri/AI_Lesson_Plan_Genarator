import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const LessonForm = ({ onSubmit, isLoading, selectedTheme }) => {
  const [ageGroup, setAgeGroup] = useState('4-5 Years');
  const [theme, setTheme] = useState('');
  const [style, setStyle] = useState('Play-based');
  const [language, setLanguage] = useState('English');
  
  useEffect(() => {
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, [selectedTheme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (theme.trim() && !isLoading) {
      onSubmit({ ageGroup, theme, style, language });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row flex-wrap gap-4 items-center">
      <div className="w-full md:flex-1">
        <select 
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
        >
          <option value="3-4 Years">3-4 Years</option>
          <option value="4-5 Years">4-5 Years</option>
          <option value="5-6 Years">5-6 Years</option>
        </select>
      </div>
      <div className="w-full md:flex-1">
        <select 
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
        >
          <option value="Play-based">Play-based</option>
          <option value="Montessori">Montessori</option>
          <option value="Waldorf">Waldorf</option>
          <option value="Reggio Emilia">Reggio Emilia</option>
        </select>
      </div>
      <div className="w-full md:flex-1">
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
      <div className="w-full flex relative">
        <input 
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Enter lesson theme (e.g. Space Exploration)"
          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 pl-4 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
          required
        />
        <button 
          type="submit" 
          disabled={isLoading || !theme.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition disabled:opacity-50"
        >
          <FaPaperPlane />
        </button>
      </div>
    </form>
  );
};

export default LessonForm;
