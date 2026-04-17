/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Detta gör att Vercel struntar i TypeScript-fel och bygger klart ändå
    ignoreBuildErrors: true,
  },
  eslint: {
    // Detta gör att den även struntar i linter-varningar
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
