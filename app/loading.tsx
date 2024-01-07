import { Skeleton } from "./components/ui/skeleton"

export default function loading() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-[200px] w-[308px] rounded-md bg-[#2F3031]" />
    </div>
  )
}
