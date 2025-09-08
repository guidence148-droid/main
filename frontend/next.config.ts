import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Turbopack is experimental; use Webpack for stable builds
  experimental: {
    turbopack: false,
  },
};

export default nextConfig;
