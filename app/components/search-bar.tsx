import { Command, CommandInput } from "./ui/command"

export function SearchBarWithCommand() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
    </Command>
  )
}
