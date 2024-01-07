import { signOut } from "@/app/api/auth/[...nextauth]/auth"
import { Button } from "@/app/components/ui/button"

export const runtime = "edge"

export default function SignOutPage() {
  return (
    <div className="xs:grid container h-[800px] flex-col items-center justify-center sm:grid md:grid lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign Out</h1>
        </div>
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <Button className="w-full" variant="default" type="submit">
            Sign Out
          </Button>
        </form>
      </div>
    </div>
  )
}
