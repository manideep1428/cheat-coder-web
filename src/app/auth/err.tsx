import React from "react";

export default function AuthErrorPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h1>Authentication Error</h1>
      <p>Something went wrong with authentication. Please try again or contact support if the problem persists.</p>
    </div>
  );
}
