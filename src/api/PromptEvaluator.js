import OpenAI from 'openai';

async function askBrian(prompt,brain) {
  const completion = await brain.chat.completions.create({
    model: 'openai/gpt-4o',
    messages: [
      {
        role: 'user',
        content:prompt,
      },
    ],
  });

  console.log(completion.choices[0].message);
  return completion.choices[0].message.content;
}


export class PromptManager{
  user_topic = ''
  context = ''
  suggestions_response = ''
  user_prompt=''


  apiKey = import.meta.env.VITE_API_KEY;
 
  openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  dangerouslyAllowBrowser:true,
  apiKey: this.apiKey,
  });

  async getContext(user_topic){
    this.user_topic = user_topic
    const  contextTemplate = `You are a creative context generator for prompt engineering.

Given a user’s idea or topic, generate a realistic and meaningful scenario that sets up a clear situation or problem related to that topic. The purpose is to test the user’s prompting skills by giving them a context where they must write a prompt to solve the issue.

Guidelines:
- The generated context must describe a problem or challenge the user is facing.
- Do not provide solutions or instructions.
- The context should be concise, self-contained, and realistic.
- Output only the context — no extra text, labels, or formatting.
- Make sure to send the complete information about the problem like giving what is the error
- If they asked about time pass act as friend and give some funny questions

Example:
User topic: "HTML"
Output: "You are facing an issue with centering a div. It stays aligned to the left and you want it to appear in the center."

Now generate a similar context for this topic:
${user_topic}

`
    this.context =  await askBrian(contextTemplate, this.openai)
    return this.context
  }

  async getEvaluation(user_prompt){
    this.user_prompt = user_prompt
    const evaluatorTemplate =  `You are a prompt evaluator. Evaluate how well the given user prompt fits the provided context.

Context:
${this.context}

User Prompt:
${user_prompt}

Evaluate the following aspects:
- Relevance to the context (0–25)
- Clarity and completeness (0–25)
- Specificity and focus (0–25)
- Creativity and potential to yield good AI results (0–25)

Output JSON only in this format:
{
  "score": <total out of 100>,
  "feedback": "<array of constructive suggestions for improvement>"
}
`
    this.suggestions_response = await askBrian(evaluatorTemplate, this.openai)
    return this.suggestions_response;
  }


}

