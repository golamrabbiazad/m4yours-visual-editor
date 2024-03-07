import type { NextRequest } from "next/server"
import { getRequestContext } from "@cloudflare/next-on-pages"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  let responseText = "Hello World"

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  const { env } = getRequestContext()

  const stmt = env.DB.prepare(`select * from users`)

  const { results } = await stmt.all()

  return new Response(JSON.stringify(results, null, 2))
}
