const { GoogleGenAI } = require('@google/genai');
const { buildPrompt } = require('../utils/promptBuilder');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const generateLessonPlan = async (ageGroup, theme, style, language) => {
  const prompt = buildPrompt(ageGroup, theme, style, language);
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    const text = response.text;
    
    // Clean up potential markdown formatting from Gemini response
    let jsonText = text;
    if (text.startsWith('```json')) {
      jsonText = text.replace(/^```json/, '').replace(/```$/, '').trim();
    } else if (text.startsWith('```')) {
      jsonText = text.replace(/^```/, '').replace(/```$/, '').trim();
    }
    
    // Remove markdown bold asterisks
    jsonText = jsonText.replace(/\*\*/g, '');

    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw new Error('Failed to generate lesson plan');
  }
};

module.exports = { generateLessonPlan };
