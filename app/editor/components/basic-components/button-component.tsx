import { Card, CardContent } from "@/app/components/ui/card"

import { ButtonIcon } from "./icons"

export function ButtonComponent() {
  return (
    <Card className="flex h-[89px] w-[100px] cursor-pointer items-center justify-center bg-[#2F3031]">
      <CardContent className="flex flex-col items-center gap-2">
        <ButtonIcon />
        <p className="text-sm">Button</p>
      </CardContent>
    </Card>
  )
}
