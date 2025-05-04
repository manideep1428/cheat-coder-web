// app/api/auth/token/route.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true, token: true }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // If user already has a token, return it
    if (user.token) {
      return NextResponse.json({ token: user.token });
    }

    // Create a proper JWT payload as an object (not an array)
    const payload = { 
      email: session.user.email,
      name: session.user.name,
      userId: user.id,
      iat: Math.floor(Date.now() / 1000),
      // Token valid for 1 year
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 365)
    };
    
    // Generate and save new token if one doesn't exist
    const newToken = jwt.sign(payload, process.env.JWT_SECRET!);
    
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { token: newToken },
      select: { token: true }
    });

    return NextResponse.json({ token: updatedUser.token });
  } catch (error) {
    console.error("Error handling token:", error);
    return NextResponse.json(
      { error: "Failed to process token request" },
      { status: 500 }
    );
  }
}

// Add a POST endpoint to explicitly create a new token
export async function POST() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create a proper JWT payload as an object
    const payload = { 
      email: session.user.email,
      name: session.user.name,
      userId: user.id,
      iat: Math.floor(Date.now() / 1000),
      // Token valid for 1 year
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 365)
    };
    
    // Generate a new token
    const newToken = jwt.sign(payload, process.env.JWT_SECRET!);
    
    // Update the user with the new token
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { token: newToken },
      select: { token: true }
    });

    return NextResponse.json({ token: updatedUser.token });
  } catch (error) {
    console.error("Error creating token:", error);
    return NextResponse.json(
      { error: "Failed to create token" },
      { status: 500 }
    );
  }
}