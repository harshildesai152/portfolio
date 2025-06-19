import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'portfolio'; // Change this to your GitHub repo name

const nextConfig: NextConfig = {
  // Build settings
  typescript: {
    ignoreBuildErrors: false, // Recommended to fix errors instead of ignoring
  },
  eslint: {
    ignoreDuringBuilds: false, // Recommended to fix lint issues
  },

  // Image handling
  images: {
    unoptimized: true, // Required for static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com', // For GitHub hosted images
      },
    ],
  },

  // Static export settings
  output: 'export',
  trailingSlash: true, // Better for GitHub Pages compatibility
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',

  // Optional: Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // Enable React Strict Mode
  reactStrictMode: true,
};

export default nextConfig;