
  import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAM7zkgyfv6keizNGPh3c9C-6nY8HCbjtI" });

async function main(myfile : any) {

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: createUserContent([
      createPartFromUri(myfile, "image/png"),
      "Caption this image.",
    ]),
  });
  console.log(response.text);
  return response.text;
}


export async function POST(req: NextRequest) {
  const { file } = await req.json();
  const res = await main(file);
  return NextResponse.json({ success: true , response : res });
}
