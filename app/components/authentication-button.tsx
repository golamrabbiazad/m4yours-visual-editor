import Link from "next/link"
import { LogIn, LogOut, Settings, User as UserIcon } from "lucide-react"

import { getUsernameFromEmail } from "@/lib/get-username"

import { auth } from "../api/auth/[...nextauth]/auth"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export async function AuthenticationButton() {
  const session = await auth()

  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      {!session ? (
        <Link
          href="/auth/signin"
          className="flex items-center gap-2 text-sm font-semibold leading-6 text-white"
        >
          Log in <LogIn className="size-4" />
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="relative cursor-pointer">
              <AvatarImage
                src={session.user?.image!}
                alt={getUsernameFromEmail(session.user?.email!)}
              />
              <div className="absolute inset-0 rounded-full border-2 border-gray-400" />
              <AvatarFallback>{session.user?.name}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon className="mr-2 size-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 size-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              <Link href="/auth/signout">
                <span>Log out</span>
              </Link>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
