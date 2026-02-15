
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function getChefRecommendation(mood: string, dietary: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a world-class executive chef at "Lumina Gastronomy". 
      A customer is feeling "${mood}" and has dietary requirements: "${dietary || 'None'}". 
      Suggest a creative, high-end dish name and a brief, appetizing description that fits this mood and dietary need. 
      Keep it sophisticated and brief.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            dishName: { type: Type.STRING },
            description: { type: Type.STRING },
            pairing: { type: Type.STRING, description: "A suggested wine or cocktail pairing" }
          },
          required: ["dishName", "description", "pairing"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      dishName: "Chef's Surprise",
      description: "A seasonal creation based on the freshest ingredients available today.",
      pairing: "Our Sommelier's selection"
    };
  }
}
