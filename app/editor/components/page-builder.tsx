import { DesktopLayout } from "./screens/desktop"
import { MobileLayout } from "./screens/mobile"

export function PageBuilder() {
  return (
    <section className="flex min-h-screen w-full justify-center gap-8 bg-[#1E1E1E] p-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[594px] rounded-md bg-[#2B2B2B] px-6 py-2">
          Desktop
        </div>
        <DesktopLayout />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-[214px] rounded-md bg-[#2B2B2B] px-6 py-2">
          Mobile
        </div>
        <MobileLayout />
      </div>
    </section>
  )
}
