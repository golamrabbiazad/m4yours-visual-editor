import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { SearchBarWithCommand } from "../../../components/search-bar"
import { Separator } from "../../../components/ui/separator"
import { useEditorContext } from "../../context/editor-context"
import {
  BoxComponent,
  ButtonComponent,
  ColumnsComponent,
  HeroComponent,
  ImageComponent,
  SectionComponent,
} from "../basic-components"
import { DraggableItem } from "../draggable-item"

export default function WidgetPanel() {
  const { toggleWidget } = useEditorContext()

  const [toggleMyComponents, setToggleMyComponents] = useState(true)
  const [toggleBasicComponents, setToggleBasicComponents] = useState(true)

  return (
    <>
      {toggleWidget && (
        <section className="max-w-md lg:max-w-sm">
          <aside className="flex flex-col justify-center gap-8 p-5">
            <div className="flex items-center justify-between">
              <SearchBarWithCommand />
            </div>
            <Separator className="bg-[#575757]" />
            <div className="flex w-[350px] flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3>My Compnents</h3>
                {toggleMyComponents ? (
                  <ChevronUp
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setToggleMyComponents(!toggleMyComponents)}
                  />
                ) : (
                  <ChevronDown
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setToggleMyComponents(!toggleMyComponents)}
                  />
                )}
              </div>
              {toggleMyComponents && (
                <div className="flex flex-row flex-wrap justify-start gap-2">
                  <DraggableItem type="HERO" label="Hero">
                    <HeroComponent />
                  </DraggableItem>
                  <DraggableItem type="BUTTON" label="Button">
                    <ButtonComponent />
                  </DraggableItem>
                  <DraggableItem type="IMAGE" label="Image">
                    <ImageComponent />
                  </DraggableItem>
                  <DraggableItem type="COLUMN" label="Column">
                    <ColumnsComponent />
                  </DraggableItem>
                  <DraggableItem type="BOX" label="Box">
                    <BoxComponent />
                  </DraggableItem>
                  <DraggableItem type="SECTION" label="Section">
                    <SectionComponent />
                  </DraggableItem>
                </div>
              )}
            </div>
            <Separator className="bg-[#575757]" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3>Basic</h3>
                {toggleBasicComponents ? (
                  <ChevronUp
                    className="h-5 w-5 cursor-pointer"
                    onClick={() =>
                      setToggleBasicComponents(!toggleBasicComponents)
                    }
                  />
                ) : (
                  <ChevronDown
                    className="h-5 w-5 cursor-pointer"
                    onClick={() =>
                      setToggleBasicComponents(!toggleBasicComponents)
                    }
                  />
                )}
              </div>
              {toggleBasicComponents && (
                <div className="flex flex-row flex-wrap justify-start gap-2">
                  <HeroComponent />
                  <ImageComponent />
                  <ButtonComponent />
                  <ColumnsComponent />
                  <BoxComponent />
                  <SectionComponent />
                </div>
              )}
            </div>
          </aside>
        </section>
      )}
    </>
  )
}
