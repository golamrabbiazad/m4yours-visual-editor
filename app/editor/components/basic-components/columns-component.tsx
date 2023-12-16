import { Card, CardContent } from "@/app/components/ui/card"

import { ColumnsIcon } from "./icons"

export function ColumnsComponent() {
  return (
    <Card className="flex h-[89px] w-[100px] cursor-pointer items-center justify-center bg-[#2F3031]">
      <CardContent className="flex flex-col items-center gap-2">
        <ColumnsIcon />
        <p className="text-sm">Columns</p>
      </CardContent>
    </Card>
  )
}
