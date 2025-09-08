import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbopack: false, // 🚀 fallback to Webpack
  },
};

export default nextConfig;
