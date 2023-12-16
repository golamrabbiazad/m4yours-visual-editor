import { Eye, Redo2, Undo2 } from "lucide-react"

import { Separator } from "@/app/components/ui/separator"

import { PublishButton } from "./publish-button"
import { ToggleSideBars } from "./toggle-sidebar"

export function EditorNav() {
  return (
    <>
      <header className="flex h-[48px] items-center justify-between">
        <h1 className="p-4 font-bold">M4Yours Editor</h1>
        <div className="flex gap-4">
          <nav className="flex flex-row items-center justify-between">
            <ul className="flex gap-2">
              <ToggleSideBars />
              <li>
                <Undo2 className="cursor-pointer" />
              </li>
              <li>
                <Redo2 className="cursor-pointer" />
              </li>
              <li>
                <Eye className="cursor-pointer" />
              </li>
            </ul>
          </nav>
          <PublishButton />
        </div>
      </header>
      <Separator className="bg-[#575757]" />
    </>
  )
}
