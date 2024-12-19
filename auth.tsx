import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/utils/supabaseClient";

declare module "next-auth" {
  interface User {
    id?: string;
    email?: string | null;
    emailVerified?: Date | null;
  }
}

export const auth = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Supabase",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          throw new Error("Email and password are required");
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error || !data.user) {
          throw new Error(error?.message || "Invalid credentials");
        }

        const emailConfirmedAt = data.user.email_confirmed_at;

        // Ensure email_confirmed_at is a valid string or number
        const emailVerified =
          emailConfirmedAt && typeof emailConfirmedAt === "string"
            ? !isNaN(Date.parse(emailConfirmedAt)) // Check if it is a valid date string
              ? new Date(emailConfirmedAt) // Create Date if valid
              : null
            : null; // Handle null or undefined case gracefully

        // Return user object with all required properties
        return {
          id: data.user.id,
          email: data.user.email,
          emailVerified,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.emailVerified = user.emailVerified
          ? user.emailVerified.toISOString()
          : null;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
          emailVerified: token.emailVerified
            ? typeof token.emailVerified === "string"
              ? new Date(token.emailVerified)
              : null
            : null,
        };
      }
      return session;
    },
  },
});

export const { handlers, signIn, signOut } = auth;
