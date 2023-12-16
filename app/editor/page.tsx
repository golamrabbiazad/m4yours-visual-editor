import { BlockPanel } from "./components/sidebars/block"
import { DragAndDropEditor } from "./dnd-editor"

export default function EditorPage() {
  return (
    <div className="flex flex-row">
      <DragAndDropEditor />
      <BlockPanel />
    </div>
  )
}
