import { useDrop } from "react-dnd"

import { useDropContext } from "../context/drop-context"

export function DropContainer({ children }: { children: React.ReactNode }) {
  const { onDrop } = useDropContext()

  const [{ isOver }, drop] = useDrop({
    accept: ["BUTTON", "TEXT", "HERO", "SECTION", "COLUMN", "BOX"],
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <div
      ref={drop}
      className={`flex flex-1 flex-col ${isOver ? "border-dashed" : ""}`}
    >
      {children}
    </div>
  )
}
