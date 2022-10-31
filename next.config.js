/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: 'akamai',
    path: ''
  },
  basePath: environment === 'production' ? '/caas-website' : '',
  assetPrefix: environment === 'production' ? '/caas-website' : '',
}

module.exports = nextConfig
