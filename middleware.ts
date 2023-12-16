export { auth as middleware } from "./app/api/auth/[...nextauth]/auth"

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
    "/editor",
  ],
}
