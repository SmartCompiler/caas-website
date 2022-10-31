/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: 'akamai',
    path: ''
  },
  basePath: environment === 'production' ? process.env.NEXT_PUBLIC_SUB_DIR : '',
  assetPrefix: environment === 'production' ? process.env.NEXT_PUBLIC_SUB_DIR : '',
}

module.exports = nextConfig
