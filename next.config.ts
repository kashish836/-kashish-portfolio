import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Use webpack for builds on Windows */
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
