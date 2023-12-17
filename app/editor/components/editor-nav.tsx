import Link from "next/link"
import { Eye, Redo2, Undo2 } from "lucide-react"

import { Separator } from "@/app/components/ui/separator"

import { PublishButton } from "./publish-button"
import { ToggleSideBars } from "./toggle-sidebar"

export function EditorNav() {
  return (
    <>
      <header className="flex h-[48px] items-center justify-between">
        <div className="flex p-6 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <h1 className="text-xl font-bold">M4yours Editor</h1>
          </Link>
        </div>
        <div className="flex gap-4">
          <nav className="flex flex-row items-center justify-between">
            <ul className="flex gap-2">
              <ToggleSideBars />
              <li>
                <Undo2 className="cursor-pointer text-[#a1a1a1]" />
              </li>
              <li>
                <Redo2 className="cursor-pointer text-[#626262]" />
              </li>
              <li>
                <Eye className="cursor-pointer text-[#a1a1a1]" />
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
