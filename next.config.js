/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig
