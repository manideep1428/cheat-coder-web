import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

/**
 * Generate a JWT for a user. You can add more fields to the payload if needed.
 */
export function generateUserJWT(userId: string): string {
  const payload = { userId };
  // Expires in 7 days
  return jwt.sign(payload, JWT_SECRET);
}

/**
 * Verify a JWT and return the payload if valid, or null if invalid.
 */
export function verifyUserJWT(token: string): null | { userId: string; iat: number; exp: number } {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string; iat: number; exp: number };
  } catch (err) {
    return null;
  }
}
