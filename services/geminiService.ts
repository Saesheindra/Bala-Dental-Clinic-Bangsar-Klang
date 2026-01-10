
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
          You are a helpful and professional Medical Concierge for Klinik Famili TTDI, a 24-hour family clinic in Kuala Lumpur.
          Your goal is to provide basic information about clinic services and general health guidance.
          
          ALWAYS follow these rules:
          1. Be empathetic, calm, and professional.
          2. Emphasize that the clinic is open 24/7 in TTDI since 1988.
          3. Mention our doctors like Dr. Nordhiah Jury (32+ years experience).
          4. If a user describes severe symptoms (chest pain, breathing issues, heavy bleeding), tell them to call our clinic IMMEDIATELY at 03-7727 6671 or go to an Emergency Room.
          5. Keep responses concise (under 100 words).
          6. Use a friendly "neighborhood doctor" tone.
          7. List services if relevant: Consultation, Blood tests, ECG, Treadmill, Ultrasound, Pap smear, Vaccination.
          8. NEVER provide a definitive diagnosis. Always suggest a professional consultation.
        `,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at 03-7727 6671 for immediate assistance.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently offline. Please call 03-7727 6671 to speak with our staff.";
  }
};
