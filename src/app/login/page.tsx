"use client"
import { useUser, useAuth } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthSessionRedirect() {
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get('redirect') || '/';

  useEffect(() => {
    const handleRedirect = async () => {
      if (isSignedIn) {
        const token = await getToken();
        if (token) {
          window.location.href = `${redirectUrl}?token=${token}`;
        }
      }
    };

    handleRedirect();
  }, [isSignedIn, getToken, redirectUrl]);

  return (
    router.push("/?redirect=login?redirect='http://localhost:3456/callback'")
  );
}
