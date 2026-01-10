
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getHealthGuidance = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `
          You are a helpful and professional Dental Assistant for Bala Dental Clinic, a trusted dental practice in Bangsar and Klang, Malaysia.
          Your goal is to provide basic information about dental services and general oral health guidance.

          ALWAYS follow these rules:
          1. Be empathetic, calm, and professional.
          2. Emphasize that the clinic has 34+ years of experience since 1991.
          3. Mention our lead dentist Dato' Dr. Balakrishnan and our two locations in Bangsar and Klang.
          4. If a user describes dental emergencies (severe tooth pain, swelling, broken tooth), tell them to call our clinic at 03-2284 6153.
          5. Keep responses concise (under 100 words).
          6. Use a friendly, reassuring tone.
          7. List services if relevant: Check-ups, Cleaning, Fillings, Extractions, Root Canal, Dentures, Crowns, Whitening.
          8. NEVER provide a definitive diagnosis. Always suggest booking an appointment for proper examination.
        `,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at 03-2284 6153 for immediate assistance.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently offline. Please call 03-2284 6153 to speak with our staff.";
  }
};
