"use client"

export function PublishButton() {
  return (
    <button
      className="h-[48px] bg-button px-12"
      onClick={() => console.log("published")}
    >
      Publish
    </button>
  )
}
