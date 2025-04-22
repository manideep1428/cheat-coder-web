import { getAuth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { userId, sessionId } = await getAuth(request);

  if (!userId || !sessionId) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }

  const token = (await clerkClient()).sessions.getSession(sessionId);

  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get('redirect_url') || 'http://localhost:53456/callback';
  console.log(token);
  return NextResponse.redirect(`${redirectUrl}?token=${token}`);
}
