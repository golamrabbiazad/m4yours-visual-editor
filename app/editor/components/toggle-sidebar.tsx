"use client"

import { PanelLeft, PanelRight } from "lucide-react"

import { useEditorContext } from "../context/editor-context"

export function ToggleSideBars() {
  const {
    toggleWidget,
    setToggleWidget,
    toggleRightSideBar,
    setToggleRightSideBar,
  } = useEditorContext()

  return (
    <>
      <li>
        <PanelLeft
          className="cursor-pointer text-[#a1a1a1]"
          onClick={() => setToggleWidget(!toggleWidget)}
        />
      </li>
      <li>
        <PanelRight
          className="cursor-pointer text-[#a1a1a1]"
          onClick={() => setToggleRightSideBar(!toggleRightSideBar)}
        />
      </li>
    </>
  )
}
