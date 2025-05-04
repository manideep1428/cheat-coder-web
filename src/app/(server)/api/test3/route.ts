import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_KEY,
  baseURL: "https://api.deepseek.com"
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { base64Image, prompt = 'What’s in this image? if no image then response no image found' } = body;
    console.log(base64Image);

    const response = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
    });
    console.log(response.choices[0].message.content);
    return NextResponse.json(response.choices[0].message);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
