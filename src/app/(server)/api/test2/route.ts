import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { extract, ProblemData } from "../ai/problem";

export async function POST(req: NextRequest, res: NextResponse){
  const deepseekApiKey = process.env.DEEPSEEK_API_KEY;
  const { base64, prompt } = await req.json();
  const safeImageDataList = Array.isArray(base64) ? base64 : [];
  let problemData: ProblemData;
  
  try {
    let responseContent;
    
    // Prepare message for DeepSeek API
    const messages = [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `You are a coding challenge interpreter. Analyze the screenshots of the coding problem and extract all relevant information. Return the information in JSON format with these fields: problem_statement, constraints, example_input, example_output. Just return the structured JSON without any other text. Preferred coding language we gonna use for this problem is `
          },
          ...safeImageDataList.map((data: any) => ({
            type: "image",
            image_url: {
              url: `data:image/png;base64,${data}`
            }
          }))
        ]
      }
    ];
    
    const response = await axios.post(
      "https://api.deepseek.com/v1/chat/completions",
      {
        model: "deepseek-chat",
        messages: messages,
        temperature: 0.2,
        max_tokens: 4000
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${deepseekApiKey}`
        }
      }
    );
    
    if (!response.data || !response.data.choices || response.data.choices.length === 0) {
      throw new Error("Empty response from DeepSeek API");
    }
    
    responseContent = response.data.choices[0].message.content;
    console.log(responseContent)
    problemData = extract(responseContent);
    return NextResponse.json(problemData);
    
  } catch (error) {
    console.error("Error using DeepSeek API for solution:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to generate solution with DeepSeek API. Please check your API key or try again later."
    });
  }
}