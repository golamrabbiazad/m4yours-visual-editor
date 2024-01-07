import { PageBuilder } from "./components/page-builder"
import { BlockPanel } from "./components/sidebars/block"
import WidgetPanel from "./components/sidebars/widget"

export const runtime = "edge"

export default function EditorPage() {
  return (
    <div className="flex flex-row">
      <WidgetPanel />
      <PageBuilder />
      <BlockPanel />
    </div>
  )
}
