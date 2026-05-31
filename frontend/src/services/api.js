import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const generateLessonPlan = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/generate`, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
