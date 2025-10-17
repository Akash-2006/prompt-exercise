<script setup>
import { ref } from 'vue';

const data = ref('');
const display = ref(false);
const submit = () => {
  display.value = true;  // Show the data on submit
};
</script>

<template>
  <div class="prompt-container">
    <div class="prompt">
      <h1>Prompt question</h1>
      <h3>Read the below context and write the prompt on the right side you will see the points and marks</h3>
      <textarea id="" v-model="data" placeholder="Enter your prompt here..."></textarea>
      <div class="button-container">
        <button @click="submit">Click to Submit</button>
      </div>
      <p v-if="display" class="displayed-text">{{ data }}</p>
      <p v-else></p>  <!-- Empty p for layout consistency -->
    </div>
  </div>
</template>

<style scoped>
/* General styles for the container */
.prompt-container {
  display: flex;
  width: 100%;
  justify-content: center;  /* Center the content horizontally */
  align-items: center;      /* Center vertically on the page */
  height: 95vh;            /* Set to exactly 100% of the viewport height */
  background-color: #f0f4f8;  /* Light background for the whole page */
  padding: 20px;            /* Padding for mobile devices */
  /* If content overflows, you can add: overflow-y: auto; for vertical scrolling */
}

/* Prompt div styles */
.prompt {
  background-color: white;  /* White background for the card */
  padding: 30px;            /* Padding inside the card */
  border-radius: 12px;      /* Rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  /* Subtle shadow for depth */
  width: 100%;               /* Set width to 30% of parent */
  height: 90%;        /* Limit maximum width for very large screens */
  text-align: left;         /* Align text to the left for a clean look */
}

/* Typography styles */
h1 {
  color: #2c3e50;  /* Dark blue for headings */
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

h3 {
  color: #34495e;  /* Slightly lighter blue for subheadings */
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;  /* Better readability */
}

/* Textarea styles */
textarea {
  width: 100%;              /* Full width within .prompt */
  height: 150px;            /* Fixed height for better input area */
  padding: 12px;            /* Internal padding */
  border: 1px solid #ccc;   /* Light border */
  border-radius: 8px;       /* Rounded corners */
  font-size: 16px;          /* Readable font size */
  resize: vertical;         /* Allow vertical resizing */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;  /* Smooth transition for focus */
}

textarea:focus {
  border-color: #007bff;    /* Blue border on focus */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);  /* Subtle glow effect */
  outline: none;            /* Remove default outline */
}

/* Button styles */
.button-container {
  text-align: center;  /* Center the button */
  margin: 20px 0;      /* Spacing above and below */
}

button {
  padding: 12px 24px;   /* Padding for a larger hit area */
  background-color: #007bff;  /* Blue background */
  color: white;         /* White text */
  border: none;         /* No border */
  border-radius: 8px;   /* Rounded corners */
  font-size: 16px;      /* Readable size */
  cursor: pointer;      /* Pointer cursor on hover */
  transition: transform 0.2s ease, background-color 0.3s ease;  /* Transition for click and hover */
}

button:hover {
  background-color: #0056b3;  /* Darker blue on hover */
}

button:active {
  transform: scale(0.98);  /* Slight scale down on click for animation */
}

/* Displayed text styles with animation */
.displayed-text {
  margin-top: 20px;     /* Spacing from other elements */
  padding: 15px;        /* Internal padding */
  background-color: #e9f5ff;  /* Light blue background */
  border-radius: 8px;   /* Rounded corners */
  border: 1px solid #007bff;  /* Subtle border */
  font-size: 16px;      /* Readable font size */
  color: #333;          /* Dark text for contrast */
  animation: fadeIn 0.5s ease-in-out;  /* Fade-in animation */
}

/* Keyframes for fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;          /* Start fully transparent */
    transform: translateY(10px);  /* Slight upward movement for effect */
  }
  to {
    opacity: 1;          /* End fully opaque */
    transform: translateY(0);     /* Back to original position */
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .prompt {
    width: 100%;        /* Full width on smaller screens */
    padding: 20px;      /* Reduce padding */
  }
  
  h1 {
    font-size: 20px;    /* Smaller heading on mobile */
  }
  
  h3 {
    font-size: 14px;    /* Smaller subheading */
  }
  
  textarea {
    height: 120px;      /* Slightly smaller textarea */
  }
}
</style>