import React from 'react';
import { motion } from 'framer-motion';
import LessonCard from './LessonCard';
import jsPDF from 'jspdf';
import { FaCopy, FaSyncAlt, FaFilePdf } from 'react-icons/fa';

const ChatContainer = ({ lessonPlan, onRegenerate }) => {
  if (!lessonPlan) return null;

  const getCopyText = (data, indent = '') => {
    if (!data) return '';
    if (Array.isArray(data)) return data.map(item => '- ' + getCopyText(item, indent)).join('\n' + indent);
    if (typeof data === 'object') {
      return Object.entries(data)
        .map(([key, value]) => {
          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          return `${indent}${formattedKey}: ${getCopyText(value, indent + '  ')}`;
        })
        .join('\n');
    }
    return String(data);
  };

  const handleCopy = () => {
    const text = `
Title: ${getCopyText(lessonPlan.title)}
Objectives: ${getCopyText(lessonPlan.objectives)}
Circle Time: ${getCopyText(lessonPlan.circleTime)}
Main Activity: ${getCopyText(lessonPlan.mainActivity)}
Creative Activity: ${getCopyText(lessonPlan.creativeActivity)}
Rhyme: ${getCopyText(lessonPlan.rhyme)}
Worksheet Idea: ${getCopyText(lessonPlan.worksheetIdea)}
Materials: ${getCopyText(lessonPlan.materials)}
Assessment: ${getCopyText(lessonPlan.assessment)}
Teacher Tips: ${getCopyText(lessonPlan.teacherTips)}
    `.trim();
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    let y = 20;
    
    doc.setFontSize(20);
    doc.text(lessonPlan.title || 'Lesson Plan', 20, y);
    y += 10;
    
    doc.setFontSize(12);
    
    const addSection = (title, content) => {
      if (!content || (Array.isArray(content) && content.length === 0)) return;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.setFont('helvetica', 'bold');
      doc.text(title, 20, y);
      y += 7;
      
      doc.setFont('helvetica', 'normal');
      
      const formatLines = (data, prefix = '') => {
        if (!data) return [];
        if (Array.isArray(data)) {
          return data.flatMap(item => formatLines(item, '• '));
        }
        if (typeof data === 'object') {
          return Object.entries(data).flatMap(([key, value]) => {
            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            const valueLines = formatLines(value, '');
            if (valueLines.length === 1) {
              return [`${prefix}${formattedKey}: ${valueLines[0]}`];
            } else {
              return [`${prefix}${formattedKey}:`, ...valueLines.map(l => `  ${l}`)];
            }
          });
        }
        return [prefix + String(data)];
      };

      const printableLines = formatLines(content);
      printableLines.forEach(line => {
        const wrappedLines = doc.splitTextToSize(line, 170);
        doc.text(wrappedLines, 20, y);
        y += (wrappedLines.length * 7);
      });
      y += 5;
    };

    addSection('Objectives', lessonPlan.objectives);
    addSection('Circle Time Activity', lessonPlan.circleTime);
    addSection('Main Activity', lessonPlan.mainActivity);
    addSection('Creative Activity', lessonPlan.creativeActivity);
    addSection('Rhyme / Song', lessonPlan.rhyme);
    addSection('Worksheet Idea', lessonPlan.worksheetIdea);
    addSection('Materials Needed', lessonPlan.materials);
    addSection('Assessment Method', lessonPlan.assessment);
    addSection('Teacher Tips', lessonPlan.teacherTips);

    doc.save('lesson-plan.pdf');
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{lessonPlan.title}</h2>
      </motion.div>

      <div className="space-y-2">
        <LessonCard title="Learning Objectives" content={lessonPlan.objectives} delay={0.1} />
        <LessonCard title="Circle Time Activity" content={lessonPlan.circleTime} delay={0.2} />
        <LessonCard title="Main Activity" content={lessonPlan.mainActivity} delay={0.3} />
        <LessonCard title="Creative Activity" content={lessonPlan.creativeActivity} delay={0.4} />
        <LessonCard title="Rhyme / Song" content={lessonPlan.rhyme} delay={0.5} />
        <LessonCard title="Worksheet Idea" content={lessonPlan.worksheetIdea} delay={0.6} />
        <LessonCard title="Materials Needed" content={lessonPlan.materials} delay={0.7} />
        <LessonCard title="Assessment Method" content={lessonPlan.assessment} delay={0.8} />
        <LessonCard title="Teacher Tips" content={lessonPlan.teacherTips} delay={0.9} />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap gap-4 mt-8 justify-center"
      >
        <button onClick={handleCopy} className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition">
          <FaCopy /> <span>Copy</span>
        </button>
        <button onClick={onRegenerate} className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-secondary text-secondary hover:bg-yellow-50 rounded-xl font-bold transition">
          <FaSyncAlt /> <span>Regenerate</span>
        </button>
        <button onClick={handleDownloadPDF} className="flex items-center space-x-2 px-6 py-3 bg-primary text-white hover:bg-primary-dark rounded-xl font-bold transition shadow-md">
          <FaFilePdf /> <span>Download PDF</span>
        </button>
      </motion.div>
    </div>
  );
};

export default ChatContainer;
