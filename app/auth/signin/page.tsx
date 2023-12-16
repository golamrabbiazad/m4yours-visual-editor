import { redirect } from "next/navigation"

import { auth } from "@/app/api/auth/[...nextauth]/auth"

import { SignInButton } from "./components/signin-button"

export default async function SignInPage() {
  const session = await auth()

  if (session && session.user!.name) {
    return redirect("/editor")
  }

  return (
    <div className="xs:grid container h-[800px] flex-col items-center justify-center sm:grid md:grid lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
        </div>

        <SignInButton />
      </div>
    </div>
  )
}
