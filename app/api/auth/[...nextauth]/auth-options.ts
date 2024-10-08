import { D1Adapter } from "@auth/d1-adapter"
import { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthConfig = {
  adapter: D1Adapter(process.env.DB),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnEditor = nextUrl.pathname.startsWith("/editor")
      const isOnSignInPage = nextUrl.pathname.startsWith("/auth/signin")
      const isOnSignOutPage = nextUrl.pathname.startsWith("/auth/signout")

      if (isOnEditor) {
        if (isLoggedIn) return true
        return false
      }

      if (isOnSignInPage) {
        if (isLoggedIn) return Response.redirect(new URL("/editor", nextUrl))
        else false
      } else if (isOnSignOutPage) {
        if (isLoggedIn) return true
        else return Response.redirect(new URL("/", nextUrl))
      }

      return true
    },
  },
}
