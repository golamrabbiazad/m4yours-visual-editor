export { auth as middleware } from "./app/api/auth/[...nextauth]/auth"

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
