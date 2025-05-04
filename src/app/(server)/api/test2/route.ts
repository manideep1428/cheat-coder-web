import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export type ProblemData = {
  problemStatement: string;
  constraints: string[];
  exampleInput: string;
  exampleOutput: string;
};

function extract(jsonString: string): ProblemData {
  try {
    // Extract JSON content from code blocks if present
    const jsonMatch = jsonString.match(/```(?:json)?\n([\s\S]*?)\n```/);
    const jsonContent = jsonMatch ? jsonMatch[1] : jsonString;
    
    const data = JSON.parse(jsonContent);

    const problemStatement = data.problem_statement || '';
    const constraints = Array.isArray(data.constraints) ? data.constraints : [];
    const exampleInput = data.example_input || '';
    const exampleOutput = data.example_output || '';

    return {
      problemStatement,
      constraints,
      exampleInput,
      exampleOutput,
    };
  } catch (error) {
    throw new Error("Invalid JSON input");
  }
}

export async function POST(req: NextRequest) {
  const deepseekApiKey = process.env.DEEPSEEK_API_KEY;
  
  if (!deepseekApiKey) {
    return NextResponse.json({
      success: false,
      error: "DeepSeek API key is missing"
    }, { status: 500 });
  }

  try {
    const { base64, language } = await req.json();
    const safeImageDataList = Array.isArray(base64) ? base64 : [];
    

    // First API call - Extract problem information from images
    const extractionMessages = [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `You are a coding challenge interpreter. Analyze the screenshots of the coding problem and extract all relevant information. Return the information in JSON format with these fields: problem_statement, constraints, example_input, example_output. Just return the structured JSON without any other text. Preferred coding language we gonna use for this problem is ${language}`
          },
          ...safeImageDataList.map((data) => ({
            type: "image",
            image_url: {
              url: `data:image/png;base64,${data}`
            }
          }))
        ]
      }
    ];
    
    const extractionResponse = await axios.post(
      "https://api.deepseek.com/v1/chat/completions",
      {
        model: "deepseek-chat",
        messages: extractionMessages,
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
    
    if (!extractionResponse.data?.choices?.[0]?.message?.content) {
      throw new Error("Empty response from DeepSeek API during extraction");
    }
    
    const responseContent = extractionResponse.data.choices[0].message.content;
    console.log("Extraction response:", responseContent);
    
    const problemData = extract(responseContent);

    // Second API call - Generate solution based on extracted problem
    const promptText = `
    Generate a detailed solution for the following coding problem:
    
    PROBLEM STATEMENT:
    ${problemData.problemStatement}
    
    CONSTRAINTS:
    ${problemData.constraints || "No specific constraints provided."}
    
    EXAMPLE INPUT:
    ${problemData.exampleInput || "No example input provided."}
    
    EXAMPLE OUTPUT:
    ${problemData.exampleOutput || "No example output provided."}
    
    LANGUAGE: ${language}
    
    I need the response in the following format:
    1. Code: A clean, optimized implementation in ${language}
    2. Your Thoughts: A list of key insights and reasoning behind your approach
    3. Time complexity: O(X) with a detailed explanation (at least 2 sentences)
    4. Space complexity: O(X) with a detailed explanation (at least 2 sentences)
    
    For complexity explanations, please be thorough. For example: "Time complexity: O(n) because we iterate through the array only once. This is optimal as we need to examine each element at least once to find the solution." or "Space complexity: O(n) because in the worst case, we store all elements in the hashmap. The additional space scales linearly with the input size."
    
    Your solution should be efficient, well-commented, and handle edge cases.
    `;

    const solutionResponse = await axios.post(
      "https://api.deepseek.com/v1/chat/completions",
      {
        model: "deepseek-chat",
        messages: [
          { role: "user", content: promptText }
        ],
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
    
    if (!solutionResponse.data?.choices?.[0]?.message?.content) {
      throw new Error("Empty response from DeepSeek API during solution generation");
    }
    
    const resultContent = solutionResponse.data.choices[0].message.content;
    
    return NextResponse.json({
      success: true,
      solution: resultContent
    });
    
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred"
    }, { status: 500 });
  }
}