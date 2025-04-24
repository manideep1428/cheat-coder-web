// app/api/gemini-image/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface GeminiMessage {
  role: string;
  parts: Array<{
    text?: string;
    inlineData?: {
      mimeType: string;
      data: string;
    }
  }>;
}
export async function POST(req: NextRequest) {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const { base64Images , model } = await req.json(); // base64Images: string[]  model: string

  if (!base64Images?.length || !model) {
    return NextResponse.json({ error: 'Missing images or model' }, { status: 400 });
  }



  try {
    const debugPrompt = `
You are a coding interview assistant helping debug and improve solutions. Analyze these screenshots which include either error messages, incorrect outputs, or test cases, and provide detailed debugging help.

I'm solving this coding problem: "${problemInfo.problem_statement}" in ${language}. I need help with debugging or improving my solution.

YOUR RESPONSE MUST FOLLOW THIS EXACT STRUCTURE WITH THESE SECTION HEADERS:
### Issues Identified
- List each issue as a bullet point with clear explanation

### Specific Improvements and Corrections
- List specific code changes needed as bullet points

### Optimizations
- List any performance optimizations if applicable

### Explanation of Changes Needed
Here provide a clear explanation of why the changes are needed

### Key Points
- Summary bullet points of the most important takeaways

If you include code examples, use proper markdown code blocks with language specification (e.g. \`\`\`java).
`;

    const geminiMessages = [
      {
        role: "user",
        parts: [
          { text: debugPrompt },
          ...base64Images.map((data: any) => ({
            inlineData: {
              mimeType: "image/png",
              data: data
            }
          }))
        ]
      }
    ];

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model || "gemini-2.0-flash"}:generateContent?key=${geminiApiKey}`,
      {
        contents: geminiMessages,
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 4000
        }
      }
    );

    const responseData = response.data;

    if (!responseData.candidates || responseData.candidates.length === 0) {
      throw new Error("Empty response from Gemini API");
    }

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Gemini API error:', error?.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to process image(s)' }, { status: 500 });
  }
}
