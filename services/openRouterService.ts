const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Free models available on OpenRouter (as of 2025)
const FREE_MODELS = [
  'deepseek/deepseek-r1:free',
  'meta-llama/llama-3.3-8b-instruct:free',
  'google/gemma-3-4b-it:free',
  'mistralai/mistral-small-3.1-24b-instruct:free'
];

const SYSTEM_PROMPT = `You are a friendly and professional Dental Assistant for Bala Dental Clinic, a trusted family dental practice with two locations in Bangsar and Klang, Malaysia.

ABOUT THE CLINIC:
- Established in 1983 by Dato' Dr. Balakrishnan
- Over 40 years of experience serving the community
- Two convenient locations: Bangsar and Klang
- Contact: 03-2284 6153

SERVICES OFFERED:
- General Check-ups & Consultations
- Professional Teeth Cleaning (Scaling & Polishing)
- Dental Fillings & Restorations
- Tooth Extractions
- Root Canal Treatment
- Dentures & Crowns
- Teeth Whitening
- Emergency Dental Care

YOUR ROLE:
1. Warmly greet patients and answer questions about dental health and our services
2. Provide helpful information about common dental concerns
3. Encourage booking appointments for proper diagnosis and treatment
4. Share clinic contact details when relevant

IMPORTANT GUIDELINES:
- Be empathetic, calm, and reassuring - many patients have dental anxiety
- Keep responses concise (under 150 words) and easy to understand
- NEVER provide definitive medical diagnoses - always recommend visiting the clinic
- For emergencies (severe pain, swelling, trauma, bleeding), advise calling 03-2284 6153 immediately
- Mention our 40+ years of experience to build trust
- Be conversational and friendly, like a helpful receptionist

RESPONSE STYLE:
- Use simple, clear language
- Be warm but professional
- Include relevant emojis sparingly for friendliness
- End responses with a helpful next step or question when appropriate`;

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const sendChatMessage = async (
  userMessage: string,
  conversationHistory: Message[] = []
): Promise<ChatResponse> => {
  if (!OPENROUTER_API_KEY) {
    return {
      success: false,
      message: "I'm currently offline. Please call us at 03-2284 6153 for assistance.",
      error: 'API key not configured'
    };
  }

  const messages: Message[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory,
    { role: 'user', content: userMessage }
  ];

  // Try each free model in order until one works
  for (const model of FREE_MODELS) {
    try {
      const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://bala-one.vercel.app',
          'X-Title': 'Bala Dental Clinic'
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        console.warn(`Model ${model} failed with status ${response.status}, trying next...`);
        continue;
      }

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        return {
          success: true,
          message: data.choices[0].message.content
        };
      }
    } catch (error) {
      console.warn(`Model ${model} error:`, error);
      continue;
    }
  }

  // All models failed
  return {
    success: false,
    message: "I'm having trouble connecting right now. Please call us at 03-2284 6153 for immediate assistance.",
    error: 'All models failed'
  };
};

export const getQuickReplies = (): string[] => [
  "What services do you offer?",
  "How do I book an appointment?",
  "Where are you located?",
  "What are your opening hours?"
];
