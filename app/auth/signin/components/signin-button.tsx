"use client"

import { signIn } from "next-auth/react"

import { Button } from "@/app/components/ui/button"

export function SignInButton() {
  return (
    <Button
      className="w-full"
      variant="default"
      type="button"
      onClick={async () => await signIn("google")}
    >
      Login with Google
    </Button>
  )
}
