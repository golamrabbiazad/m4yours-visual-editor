"use client"

import { BuiltInProviderType } from "next-auth/providers/index"
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react"

import { Button } from "@/app/components/ui/button"

export function SignInButton({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >
}) {
  return Object.values(providers).map((provider) => (
    <div key={provider.name}>
      {provider.name === "Google" ? (
        <Button
          className="w-full"
          variant="default"
          type="button"
          onClick={() => signIn(provider.id)}
        >
          Login with Google
        </Button>
      ) : null}
    </div>
  ))
}
