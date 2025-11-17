# Prompt Evaluation Exercise

This is a Vue.js web application that helps users practice and improve their prompt engineering skills. Users can select from different topics, receive contextual scenarios, write prompts, and get AI-powered scoring and feedback.

## 🚀 Features
- 🎯 **Topic Selection** - Choose from various categories to practice prompt writing
- 📝 **Context Scenarios** - Get relevant background information and scenarios for each topic
- ✍️ **Prompt Interface** - Write and submit your prompts in a clean, user-friendly interface
- � **Scoring System** - Receive numerical scores (0-100) for your prompt quality
- 💡 **AI Feedback** - Get detailed suggestions and recommendations for improvement
- 🎨 **Modern UI** - Clean interface built with Vue.js and Tailwind CSS
- ⚡ **Real-time Loading** - Interactive loading states and smooth user experience

## 🏗️ Tech Stack
- **Frontend:** Vue 3 + Vite
- **Styling:** Tailwind CSS + Custom CSS
- **AI Engine:** AI-powered prompt evaluation and scoring
- **State Management:** Vue 3 Composition API

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
 │    ├── LeftSide/
 │    │    ├── DropDown.vue        # Topic selection dropdown
 │    │    ├── PromptInterface.vue # Main prompt input interface
 │    ├── RigthSide/
 │    │    ├── Marks.vue           # Score display component
 │    │    ├── Suggestions.vue     # Feedback and suggestions
 ├── api/
 │    ├── PromptEvaluator.js       # API integration for evaluation
 ├── App.vue
 ├── main.js
```

## 🧠 How It Works
1. **Select Topic** - User chooses a topic from the dropdown menu
2. **Load Context** - System provides relevant scenario and context information
3. **Write Prompt** - User crafts their prompt based on the given context
4. **Submit & Evaluate** - AI analyzes the prompt quality and effectiveness
5. **Get Results** - User receives a numerical score (0-100) and detailed feedback
6. **Improve** - User can refine their prompt based on suggestions and try again

## 🎯 Use Cases
- **Learning Prompt Engineering** - Practice writing effective AI prompts
- **Skill Assessment** - Evaluate your current prompt writing abilities
- **Professional Development** - Improve prompts for work-related AI tasks
- **Educational Training** - Great for workshops and training sessions

