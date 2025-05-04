// import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
// import { extract, ProblemData } from "../ai/problem";

// export async function POST(req: NextRequest, res: NextResponse){
//   const geminiApiKey = process.env.GEMINI_API_KEY;
//   const { imageDataList , language } = await req.json();
//   const safeImageDataList = Array.isArray(imageDataList) ? imageDataList : [];
//   let problemData : ProblemData;
//   try {
//     let responseContent ;
     
//         const geminiMessages = [
//             {
//               role: "user",
//               parts: [
//                 {
//                   text: `You are a coding challenge interpreter. Analyze the screenshots of the coding problem and extract all relevant information. Return the information in JSON format with these fields: problem_statement, constraints, example_input, example_output. Just return the structured JSON without any other text. Preferred coding language we gonna use for this problem is ${language}.`
//                 },
//                 ...safeImageDataList.map((data: any) => ({
//                   inlineData: {
//                     mimeType: "image/png",
//                     data: data
//                   }
//                 }))
//               ]
//             }
//           ];

//         const response = await axios.post(
//           `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
//           {
//             contents: geminiMessages,
//             generationConfig: {
//               temperature: 0.2,
//               maxOutputTokens: 4000
//             }
//           }
//         );

//         const responseData = response.data 
        
//         if (!responseData.candidates || responseData.candidates.length === 0) {
//           throw new Error("Empty response from Gemini API");
//         }
        
//         responseContent = responseData.candidates[0].content.parts[0].text;
//         problemData = extract(responseContent);
//         return NextResponse.json({json : problemData})
//       } catch (error) {
//         console.error("Error using Gemini API for solution:", error);
//         return NextResponse.json({
//           success: false,
//           error: "Failed to generate solution with Gemini API. Please check your API key or try again later."
//         });
//       }
// }

export async function GET(){
  return NextResponse.json({ message: "Hello, world!" });
}