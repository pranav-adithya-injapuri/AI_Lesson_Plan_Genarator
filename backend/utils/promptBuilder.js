const buildPrompt = (ageGroup, theme, style, language) => {
  let prompt = `You are an experienced preschool educator with 20 years of teaching experience.

Generate a complete lesson plan.

Age Group: ${ageGroup}
Theme: ${theme}
`;

  if (style) {
    prompt += `Teaching Style: ${style}\n`;
  }
  
  if (language) {
    prompt += `Language: ${language}\n`;
  }

  prompt += `
Return ONLY valid JSON.

Required Fields:
- title
- objectives
- circleTime
- mainActivity
- creativeActivity
- rhyme
- worksheetIdea
- materials
- assessment
- teacherTips

Requirements:
- Age appropriate
- Fun
- Safe
- Easy for teachers
- Interactive
- Educational
- Creative
- Practical

Objectives should be a list.
Materials should be a list.
Return JSON only.
`;

  return prompt;
};

module.exports = { buildPrompt };
