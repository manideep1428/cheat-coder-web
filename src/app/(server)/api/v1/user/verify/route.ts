import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
     const { token } = await req.json();
     console.log(token)
     if (!token) return NextResponse.json("No token Found")
     try {
          const res = jwt.verify(token, process.env.JWT_SECRET!)
          return NextResponse.json({ res })
     } catch (error:any) {
          return NextResponse.json(error)
     }
}