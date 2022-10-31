/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
