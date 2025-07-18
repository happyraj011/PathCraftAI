import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "pathcraftAI", 
  name: "PathCraftAI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});