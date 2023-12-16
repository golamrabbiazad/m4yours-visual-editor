export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    // "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
    "/editor",
  ],
}
