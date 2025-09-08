import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // ✅ force Turbopack to use frontend folder as root
  },
  reactStrictMode: true,
};

export default nextConfig;
