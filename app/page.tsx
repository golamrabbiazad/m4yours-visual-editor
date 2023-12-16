import Link from "next/link"

import { auth } from "./api/auth/[...nextauth]/auth"

export const runtime = "edge"

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <header>
        <nav>Homepage nav</nav>
      </header>

      <main>
        <h1 className="p-16 text-white">
          No User
          {session && (
            <span className="text-white">User: {session.user!.name}</span>
          )}
        </h1>
        <Link scroll={false} href="/editor" className="text-black">
          Editor
        </Link>
      </main>
      <footer>footer</footer>
    </div>
  )
}
