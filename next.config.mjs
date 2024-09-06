/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/NextJs', // Base path for serving the app
  assetPrefix: '/NextJs/', // Prefix for static assets
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;