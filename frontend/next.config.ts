import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Recommended
  // Optional: remove Turbopack experimental feature
  experimental: {},
  typescript: {
    // Ignore TypeScript build errors in production (use carefully)
    ignoreBuildErrors: false, 
  },
};

export default nextConfig;
