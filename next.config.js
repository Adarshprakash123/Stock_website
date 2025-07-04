/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: "dist",
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
  // Ensure trailing slashes for static hosting
  trailingSlash: true,
};

module.exports = nextConfig;
