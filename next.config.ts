import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/**": ["./docs/**/*"],
  },
};

export default nextConfig;
