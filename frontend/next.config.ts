import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {}, // no Turbopack, suppress warnings
  typescript: {
    ignoreBuildErrors: false, // fail build if TS errors exist
  },
};

export default nextConfig;
