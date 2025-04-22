import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SignInPage() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const redirectUrl = searchParams.get('redirect_url');

  useEffect(() => {
    if (from === 'electron' && redirectUrl) {
      sessionStorage.setItem('electron_redirect_url', redirectUrl);
    }
  }, [from, redirectUrl]);

  return <SignIn />;
}
