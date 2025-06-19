
import type {NextConfig} from 'next';

// Determine if the build is running in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// IMPORTANT: Replace 'YOUR_REPOSITORY_NAME' with your actual GitHub repository name.
// For example, if your repository URL is https://github.com/your-username/my-portfolio,
// then repoName should be 'my-portfolio'.
const repoName = 'https://harshildesai152.github.io/portfolio/';

const nextConfig: NextConfig = {
  output: 'export', // Explicitly set for static HTML export
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // When `output: 'export'` is used, image optimization (next/image)
    // might not work as expected without a custom loader or if the platform doesn't support it.
    // Setting unoptimized: true serves images as-is, which is generally fine for GitHub Pages.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
