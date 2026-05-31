const { generateLessonPlan } = require('../services/geminiService');

const generateLesson = async (req, res) => {
  try {
    const { ageGroup, theme, style, language } = req.body;
    
    if (!ageGroup || !theme) {
      return res.status(400).json({ error: 'Age group and theme are required' });
    }

    const lessonPlan = await generateLessonPlan(ageGroup, theme, style, language);
    
    res.status(200).json(lessonPlan);
  } catch (error) {
    console.error('Error generating lesson:', error);
    res.status(500).json({ error: 'Failed to generate lesson plan. Please try again later.' });
  }
};

module.exports = { generateLesson };
