/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: 'akamai',
    path: ''
  },
  basePath: '/caas-website',
  assetPrefix: '/caas-website'
}

module.exports = nextConfig
