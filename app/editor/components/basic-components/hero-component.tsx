import { Card, CardContent } from "@/app/components/ui/card"

import { HeroIcon } from "./icons"

export function HeroComponent() {
  return (
    <Card className="flex h-[89px] w-[100px] cursor-pointer items-center justify-center bg-[#2F3031]">
      <CardContent className="flex flex-col items-center gap-2">
        <HeroIcon />
        <p className="text-sm">Hero</p>
      </CardContent>
    </Card>
  )
}
