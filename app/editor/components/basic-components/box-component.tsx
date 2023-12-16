import { Card, CardContent } from "@/app/components/ui/card"

import { ImageIcon } from "./icons"

export function BoxComponent() {
  return (
    <Card className="flex h-[89px] w-[100px] cursor-pointer items-center justify-center bg-[#2F3031]">
      <CardContent className="flex flex-col items-center gap-2">
        <ImageIcon />
        <p className="text-sm">Box</p>
      </CardContent>
    </Card>
  )
}
