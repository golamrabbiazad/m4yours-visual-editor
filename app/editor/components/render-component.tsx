import { Button } from "@/app/components/ui/button"

import { DropContainer } from "./drop-container"

interface RenderComponentProps {
  type: string
  label: string
}

export function renderComponent({ type, label }: RenderComponentProps) {
  switch (type) {
    case "BUTTON":
      return <Button>{label}</Button>
    case "TEXT":
      return <span>{label}</span>
    case "BOX":
      return (
        <DropContainer>
          <div className="flex border">{label}</div>
        </DropContainer>
      )
    case "HERO":
      return <div className="flex border">{label}</div>
    case "ROW":
      return (
        <div className="flex flex-row border">
          <DropContainer>{label}</DropContainer>
        </div>
      )
    case "COLUMN":
      return (
        <DropContainer>
          <div className="flex h-full flex-col border">{label}</div>
        </DropContainer>
      )
    case "SECTION":
      return (
        <section className="flex flex-col border">
          <DropContainer>{label}</DropContainer>
        </section>
      )
    default:
      return null
  }
}
