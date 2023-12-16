"use client"

import { lazy, Suspense } from "react"
import { ChevronDown } from "lucide-react"

import { Switch } from "../../../components/ui/switch"
import { useEditorContext } from "../../context/editor-context"
import { LoadingSkeletonEditor } from "../loading-editor"

const Editor = lazy(() => import("@/lib/markdown-editor/editor"))

export function BlockPanel() {
  const { toggleRightSideBar } = useEditorContext()

  return (
    <>
      {toggleRightSideBar && (
        <section className="max-w-sm lg:max-w-sm">
          <aside className="flex flex-col justify-center gap-8 p-5">
            <div className="flex items-center justify-between">
              <h3>Block Options</h3>
              <ChevronDown className="h-5 w-5" />
            </div>

            <h4 className="text-[#575757]">Text*</h4>

            <Suspense fallback={<LoadingSkeletonEditor />}>
              <div className="rounded-md border border-gray-500 bg-[#2F3031]">
                <Editor />
              </div>
            </Suspense>

            <div className="flex items-center justify-between">
              <h3>Inline Text Editing</h3>
              <Switch id="text-editing-mode" />
            </div>

            <p className="text-sm text-gray-500">
              Allow rich text editing inline on the page by double clicking on
              text blocks.
            </p>
          </aside>
        </section>
      )}
    </>
  )
}
