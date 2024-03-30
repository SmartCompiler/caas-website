/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: 'akamai',
    path: process.env.NEXT_PUBLIC_BASE_URL
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: "asset/source",
    })
    return config

  }
}

module.exports = nextConfig
