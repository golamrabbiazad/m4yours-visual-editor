import { Skeleton } from "@/app/components/ui/skeleton"

export function LoadingSkeletonEditor() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-[200px] w-[308px] rounded-md bg-[#2F3031]" />
    </div>
  )
}
