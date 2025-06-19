import type {NextConfig} from 'next';

// IMPORTANT: Replace 'YOUR_REPOSITORY_NAME' with your actual GitHub repository name
// if deploying to a subpath on GitHub Pages (e.g., your-username.github.io/your-repo-name).
// If deploying to a custom domain or the root (your-username.github.io),
// you can leave this as an empty string, or a value like 'YOUR_REPOSITORY_NAME'
// which will then cause useSubpath to be false.
const repoName = 'https://harshildesai152.github.io/portfolio/';; // <<<< ------ YOU MUST UPDATE THIS!!

const isProduction = process.env.NODE_ENV === 'production';

// Only set basePath and assetPrefix if repoName is meaningfully set
// AND we are in a production build context.
const useSubpath = isProduction && repoName && repoName !== 'YOUR_REPOSITORY_NAME' && repoName !== '';

const nextConfig: NextConfig = {
  output: 'export', // Explicitly set for static HTML export

  // basePath should start with a slash if used.
  // It's the path your app will be accessible from (e.g., /your-repo-name).
  basePath: useSubpath ? `/${repoName}` : '',

  // assetPrefix is used for loading assets (JS, CSS, images) from that path.
  // It should end with a slash if used.
  assetPrefix: useSubpath ? `/${repoName}/` : '',

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
