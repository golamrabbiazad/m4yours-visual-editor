import million from "million/compiler"

const millionConfig = {
  auto: { rsc: true },
  mute: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  transpilePackages: ["@lexical/react"],
  typescript: {
    ignoreBuildErrors: true,
  },
}

// export default nextConfig

export default million.next(nextConfig, millionConfig)
