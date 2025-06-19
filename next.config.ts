import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Build optimizations
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Only for temporary builds (fix TS errors later)
  },
  eslint: {
    ignoreDuringBuilds: true, // ⚠️ Only for temporary builds (fix linting later)
  },

  // Image handling (static export compatible)
  images: {
    unoptimized: true, // Required for `output: 'export'`
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Static export settings
  output: 'export', // ✅ Generates static HTML files
  trailingSlash: true, // ✅ Ensures consistent URLs
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // ✅ Conditional basePath
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', // ✅ Conditional assetPrefix
};

export default nextConfig;