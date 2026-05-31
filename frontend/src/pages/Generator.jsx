import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LessonForm from '../components/LessonForm';
import LoadingState from '../components/LoadingState';
import ChatContainer from '../components/ChatContainer';
import { generateLessonPlan } from '../services/api';
import { FaBars } from 'react-icons/fa';

const Generator = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [lessonPlan, setLessonPlan] = useState(null);
  const [lastRequest, setLastRequest] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerate = async (data) => {
    setIsLoading(true);
    setError(null);
    setLessonPlan(null);
    setLastRequest(data);
    try {
      const result = await generateLessonPlan(data);
      setLessonPlan(result);
    } catch (err) {
      setError('Failed to generate lesson plan. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (lastRequest) {
      handleGenerate(lastRequest);
    }
  };

  return (
    <div className="flex h-[calc(100vh-73px)]">
      <Sidebar 
        onSelectTheme={setSelectedTheme} 
        isMobileOpen={isMobileSidebarOpen} 
        setIsMobileOpen={setIsMobileSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col h-full bg-gray-50 overflow-hidden relative">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white p-4 border-b border-gray-200 flex items-center shadow-sm">
          <button 
            onClick={() => setIsMobileSidebarOpen(true)}
            className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg mr-4"
          >
            <FaBars className="text-xl" />
          </button>
          <h1 className="font-bold text-lg text-gray-800">Generator</h1>
        </div>

        {/* Header / Intro */}
        {!lessonPlan && !isLoading && (
          <div className="text-center py-12 px-4 max-w-2xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Lesson Plan Generator</h1>
            <p className="text-gray-600">Select an age group and enter a theme, or pick one from the quick themes sidebar to get started.</p>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          {error && (
            <div className="max-w-4xl mx-auto mb-8 p-4 bg-red-100 text-red-700 rounded-xl border border-red-200 text-center font-medium">
              {error}
            </div>
          )}
          
          {isLoading && <LoadingState />}
          
          {lessonPlan && !isLoading && (
            <ChatContainer lessonPlan={lessonPlan} onRegenerate={handleRegenerate} />
          )}
        </div>

        {/* Input Form at Bottom */}
        <div className="p-4 md:p-6 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <div className="max-w-4xl mx-auto">
            <LessonForm 
              onSubmit={handleGenerate} 
              isLoading={isLoading} 
              selectedTheme={selectedTheme} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
