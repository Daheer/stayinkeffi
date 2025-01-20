import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* config options here */
};

export default nextConfig;
