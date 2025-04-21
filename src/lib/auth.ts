import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../prisma";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT!,
        clientSecret : process.env.GOOGLE_SECRET!
      })
    ]
    ,
    strategy: "jwt",
    pages: {
      signIn: "/signin",
      signOut: "/signout",
      error: "/auth/err"
    },
    callbacks: {
      //@ts-ignore
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id; 
        }
        return token;
      },
      //@ts-ignore
      async session({ session, token }) {
        session.accessToken = token; // expose it to the client
        return session;
      },
      //@ts-ignore
      async redirect({ url, baseUrl }) {
        // Always redirect to dashboard
        return baseUrl + "/dashboard";
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    
}