import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

// Prefer GOOGLE_API_KEY (Actions convention), fall back to GEMINI_API_KEY for local/dev.
const apiKey = process.env.GOOGLE_API_KEY ?? process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("Missing GOOGLE_API_KEY or GEMINI_API_KEY env var for Gemini API");
}

const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  
  const prompt = `Generate a funny, high-concept "Alternate Reality" startup idea for a developer's portfolio. 
  The idea should be absurd but sound technically impressive.
  Return ONLY a JSON object with this structure:
  {
    "projectName": "Name",
    "techStack": ["React", "TypeScript", "Node.js", "etc"],
    "problemSolved": "One sentence describing the ridiculous problem it solves."
  }
  Use a mix of high-tech buzzwords (AI, LIDAR, Blockchain) and mundane everyday tasks.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text().replace(/```json|```/g, ""); // Clean up markdown
  
  fs.writeFileSync('./src/assets/files/dailyProject.json', text);
}

run();