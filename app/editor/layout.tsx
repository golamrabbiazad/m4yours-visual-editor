import "@/lib/markdown-editor/themes/lexical.css"

import { EditorNav } from "./components/editor-nav"
import { EditorContextProvider } from "./context/editor-context"

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col">
      <EditorContextProvider>
        <EditorNav />
        <div className="h-full w-full">{children}</div>
      </EditorContextProvider>
    </main>
  )
}
