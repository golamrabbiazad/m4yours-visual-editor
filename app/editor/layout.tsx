import { redirect } from "next/navigation"
import NextAuth from "next-auth"

import "@/lib/markdown-editor/themes/lexical.css"

import { authOptions } from "../api/auth/[...nextauth]/auth.config"
import { EditorNav } from "./components/editor-nav"
import { EditorContextProvider } from "./context/editor-context"

export default async function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await NextAuth(authOptions).auth()

  if (!session) {
    return redirect("/auth/signin")
  }

  return (
    <main className="flex flex-col">
      <EditorContextProvider>
        <EditorNav />
        <div className="h-full w-full">{children}</div>
      </EditorContextProvider>
    </main>
  )
}
