# AI Lesson Planner

An intelligent, full-stack web application designed to generate engaging, age-appropriate lesson plans for children using Google's Gemini AI. The project provides an intuitive UI for educators to specify themes, age groups, teaching styles, and languages to instantly generate detailed lesson plans complete with circle time activities, main activities, creative ideas, and teacher tips.

## 🚀 Features
- **AI-Powered Generation:** Leverages Google's Gemini AI for robust, creative, and structured lesson plans.
- **Customizable Inputs:** Tailor plans by age group (2-6 years), theme, teaching style (Play-based, Montessori, etc.), and language.
- **Rich Output Formatting:** Beautifully rendered outputs with distinct sections for objectives, activities, materials, and teacher tips.
- **Export Options:** Easily copy the generated plan to the clipboard or download it as a formatted PDF.
- **Responsive Design:** Clean, modern, and mobile-friendly UI built with React and Tailwind CSS.

## 🛠️ Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Framer Motion (for animations), jsPDF.
- **Backend:** Node.js, Express.js, `@google/genai` (Google Gemini AI SDK).
- **Deployment:** Ready for deployment on Vercel (Frontend) and Render (Backend).

## 💻 Running Locally

### Prerequisites
Make sure you have Node.js installed on your machine. You will also need a Google Gemini API Key.

### 1. Setup the Backend
1. Open a terminal and navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```
   *(The backend runs on http://localhost:5000 by default).*

### 2. Setup the Frontend
1. Open a new terminal and navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## 🌐 Deployment
- **Backend (Render):** Set the Root Directory to `backend`, Build Command to `npm install`, Start Command to `npm start`. Ensure you add your `GEMINI_API_KEY` to the Environment Variables.
- **Frontend (Vercel):** Set the Root Directory to `frontend` and the Framework Preset to Vite. Add an Environment Variable named `VITE_API_URL` pointing to your live backend URL (e.g., `https://your-backend.onrender.com/api`).

## 📄 License
This project is created for evaluation purposes.
