"use client"

import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

import { Button } from "@/app/components/ui/button"

export function SignOutButton() {
  const router = useRouter()

  return (
    <Button
      className="w-full"
      variant="default"
      type="button"
      onClick={async () => {
        const data = await signOut({
          redirect: false,
          callbackUrl: "/",
        })

        router.push(data.url)
      }}
    >
      Sign Out
    </Button>
  )
}
