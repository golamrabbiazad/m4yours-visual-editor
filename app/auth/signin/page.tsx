import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { getProviders } from "next-auth/react"

import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"

import { SignInButton } from "./components/signin-button"

export const runtime = "edge"

export default async function SignInPage() {
  const session = await getServerSession(authOptions)

  if (session && session.user!.name) {
    return redirect("/editor")
  }

  const providers = await getProviders()

  if (!providers) {
    return "providers not found!"
  }

  return (
    <div className="xs:grid container h-[800px] flex-col items-center justify-center sm:grid md:grid lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
        </div>

        <SignInButton providers={providers} />
      </div>
    </div>
  )
}
