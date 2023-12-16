"use client"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { PageBuilder } from "./components/page-builder"
import WidgetPanel from "./components/sidebars/widget"
import { DropContextProvider } from "./context/drop-context"

export function DragAndDropEditor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DropContextProvider>
        <WidgetPanel />
        <PageBuilder />
      </DropContextProvider>
    </DndProvider>
  )
}
