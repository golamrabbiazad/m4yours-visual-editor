"use client"

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react"

interface EditorContextProps {
  toggleWidget: boolean
  toggleRightSideBar: boolean
  setToggleWidget: Dispatch<SetStateAction<boolean>>
  setToggleRightSideBar: Dispatch<SetStateAction<boolean>>
}

const EditorContext = createContext({} as EditorContextProps)

export function EditorContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toggleWidget, setToggleWidget] = useState(true)
  const [toggleRightSideBar, setToggleRightSideBar] = useState(false)

  const values = {
    toggleWidget,
    toggleRightSideBar,
    setToggleWidget,
    setToggleRightSideBar,
  }

  return (
    <EditorContext.Provider value={values}>{children}</EditorContext.Provider>
  )
}

export function useEditorContext() {
  const context = useContext(EditorContext)

  if (!context) {
    throw new Error(
      `useEditorContext is must be used with in EditorContextProvider!`
    )
  }

  return context
}
