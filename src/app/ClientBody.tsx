"use client";

import { SessionProvider } from "next-auth/react";
import { Suspense, useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-black text-white";
  }, []);

  return (
    <body className="antialiased bg-black text-white" suppressHydrationWarning>
      <SessionProvider>
        <Suspense>
      {children}
      </Suspense>
      </SessionProvider>
    </body>
  );
}
