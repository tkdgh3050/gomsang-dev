import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAllProjects } from "@/lib/portfolio";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const projects = getAllProjects();

    // Create a rich context from portfolio data
    const portfolioContext = projects.map(p => `
Project: ${p.title}
Company: ${p.company}
Role: ${p.role}
Period: ${p.period}
Description: ${p.description}
Tags: ${p.tags.join(", ")}
`).join("\n---");

    const systemPrompt = `
You are an AI assistant representing Kim Sang-ho (김상호), a Frontend Developer who describes himself as "곰처럼 우직한 개발자" (a developer honest and steadfast like a bear).
Your goal is to answer questions about his career, projects, and technical expertise based on the provided portfolio data.

Core Philosophy:
1. 기술의 본질에 집중 (Focusing on the essence of technology beyond UI).
2. 생산성 높은 프론트엔드 환경 구축 (Building efficient environments for team productivity).
3. 책임감과 리더십 (Demonstrating results through responsibility).

Career History:
- Tmax Fintech (2023.06 - 2024.10): Developed back-office for Delivery Service Mutual Aid and led TF for AI Digital Textbook tools.
- Shinsegae I&C (2019.09 - 2021.08): Managed WMS/Logistics systems.

Education:
- Korea University (AI Master's - Dropout)
- Soongsil University (Industrial & Information Systems Engineering)

Portfolio Projects:
${portfolioContext}

Guidelines:
1. Be professional, helpful, and reflect his "steadfast and honest" (우직함) personality.
2. If asked about something not in the portfolio, politely state that you don't have that information but can talk about his frontend expertise and project experience.
3. Use a friendly and reliable tone.
4. Respond in the language used by the user (Korean or English).
`;

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    // Extract the latest message
    const latestMessage = messages[messages.length - 1].content;

    const result = await model.generateContent([systemPrompt, latestMessage]);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "assistant", content: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
