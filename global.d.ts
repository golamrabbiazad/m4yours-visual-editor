declare module "*.md" {
  const text: string
  export default text
}

declare module "*.png"

declare module "*.webp"

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    PORT: number
    RESEND_API_KEY: string
    EDGE_CONFIG: string
    STAGING?: string
    DB: D1Database
  }
}

