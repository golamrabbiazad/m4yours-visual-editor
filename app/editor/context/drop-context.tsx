"use client"

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react"

interface DroppedItem {
  type: string
  label: string
  children?: DroppedItem[]
}

interface DropContextProps {
  droppedItems: DroppedItem[]
  setDroppedItems: Dispatch<SetStateAction<DroppedItem[]>>
  onDrop: (item: DroppedItem) => void
}

const DropContext = createContext({} as DropContextProps)

export function DropContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([])

  const onDrop = (item: DroppedItem) => {
    setDroppedItems([...droppedItems, item])
  }

  const values = {
    droppedItems,
    setDroppedItems,
    onDrop,
  }

  return <DropContext.Provider value={values}>{children}</DropContext.Provider>
}

export function useDropContext() {
  const context = useContext(DropContext)

  if (!context) {
    throw new Error("useDropContext must be used within a DropProvider!")
  }

  return context
}
