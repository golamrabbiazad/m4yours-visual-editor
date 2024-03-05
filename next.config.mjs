import million from "million/compiler"

const millionConfig = {
  auto: { rsc: true },
  mute: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default million.next(nextConfig, millionConfig)
