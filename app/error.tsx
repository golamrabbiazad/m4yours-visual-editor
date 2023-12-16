"use client"

import { Button } from "./components/ui/button"

interface Props {
  error: Error
  reset: () => void
}

export default function ErrorPage({ error, reset }: Props) {
  console.error("Error", error)
  return (
    <>
      <div>An expected error has occurred.</div>
      <Button onClick={() => reset()}>Retry</Button>
    </>
  )
}
