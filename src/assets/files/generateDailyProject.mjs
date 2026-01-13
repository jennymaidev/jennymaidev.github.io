import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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