import { Fragment } from "react"

import { useDropContext } from "../../context/drop-context"
import { renderComponent } from "../render-component"

export function DesktopLayout() {
  const { droppedItems } = useDropContext()

  return (
    <div className="h-[805px] w-[594px] border">
      {droppedItems.map((item, index) => (
        <Fragment key={index}>{renderComponent(item)}</Fragment>
      ))}
    </div>
  )
}
