import { PropsWithChildren } from "react"
import { useDrag } from "react-dnd"

interface DraggableItemProps {
  type: string
  label: string
}

export function DraggableItem({
  type,
  label,
  children,
}: PropsWithChildren<DraggableItemProps>) {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div ref={drag} className={`${isDragging ? "opacity-50" : ""}`}>
      {children}
    </div>
  )
}
