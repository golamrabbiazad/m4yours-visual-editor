import { Card, CardContent } from "@/app/components/ui/card"

import { StackIcon } from "./icons"

export function SectionComponent() {
  return (
    <Card className="flex h-[89px] w-[100px] cursor-pointer items-center justify-center bg-[#2F3031]">
      <CardContent className="flex flex-col items-center gap-2">
        <StackIcon />
        <p className="text-sm">Section</p>
      </CardContent>
    </Card>
  )
}
