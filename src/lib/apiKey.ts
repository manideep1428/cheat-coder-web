import { randomBytes } from 'crypto';
import { prisma } from '../../prisma';

/**
 * Get or create the unique API key for a user.
 * @param userId string
 * @returns Promise<string> The user's API key  
 */
import { generateUserJWT } from './jwt';

export async function getOrCreateApiKey(userId: string): Promise<{ key: string, jwt: string }> {
  let apiKey = await prisma.apiKey.findUnique({ where: { userId } });
  let jwtToken = apiKey?.jwt;
  if (!apiKey) {
    const key = randomBytes(32).toString('hex');
    jwtToken = generateUserJWT(userId);
    apiKey = await prisma.apiKey.create({
      data: { key, userId, jwt: jwtToken },
    });
  } else if (!jwtToken) {
    jwtToken = generateUserJWT(userId);
    await prisma.apiKey.update({ where: { userId }, data: { jwt: jwtToken } });
  }
  return { key: apiKey.key, jwt: jwtToken! };
}
