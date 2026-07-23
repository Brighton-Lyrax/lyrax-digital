/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['via.placeholder.com'],
  },
}
module.exports = nextConfig
