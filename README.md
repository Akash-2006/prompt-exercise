# AI Research Paper Summarizer

This is a Vue.js web application that allows users to upload research papers (PDF or text), choose topics of interest, and receive AI-generated summaries based on their selected topics.

## 🚀 Features
- 📂 Upload research papers in PDF or text format
- 🧠 AI-powered summarization by topic
- 🗂️ Topic selection to focus summaries on user interests
- 💾 View and download generated summaries
- 🎨 Clean and modern UI built with Vue.js and Tailwind CSS

## 🏗️ Tech Stack
- **Frontend:** Vue 3 + Vite
- **Styling:** Tailwind CSS
- **AI Engine:** OpenAI GPT models (via API)

## 📦 Project Setup

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run the development server
```bash
npm run dev
```

### 3️⃣ Build for production
```bash
npm run build
```

## 🧩 Folder Structure
```
src/
 ├── components/
 │    ├── UploadPaper.vue
 │    ├── TopicSelector.vue
 │    ├── SummaryViewer.vue
 ├── pages/
 │    ├── Home.vue
 │    ├── About.vue
 ├── App.vue
 ├── main.js
```

## ⚙️ Environment Variables
Create a `.env` file in the project root with the following keys:
```
VITE_API_BASE_URL=https://your-api-endpoint.com
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

## 🧠 How It Works
1. User uploads a research paper.
2. User selects topics of interest.
3. The system processes the paper and extracts summaries relevant to selected topics using AI.
4. Summaries are displayed in an organized and visually clear format.

