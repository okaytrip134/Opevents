import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export
  output: "export",
    images: {
    unoptimized: true, // 👈 this disables image optimization
  },

  // ESLint config
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
