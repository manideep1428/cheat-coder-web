import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../prisma";
import { NextAuthOptions } from "next-auth";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT!,
        clientSecret : process.env.GOOGLE_SECRET!
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
    },
    callbacks: {
      //@ts-ignore
      async jwt({ token, account }) {
        if (account) {
          token.acessToken = account.access_token
        }
        return token
      },
      //@ts-ignore
      async session({ session, token }) {
        if (token) {
          //@ts-ignore
          session.acessToken = token.acessToken
          return session
        }
        return session
      }
    }
}