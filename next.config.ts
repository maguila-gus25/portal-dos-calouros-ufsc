import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/**": ["./docs/**/*"],
  },
  async redirects() {
    return [
      { source: "/secoes/coordenacoes", destination: "/centros/ctc", permanent: true },
      { source: "/secoes/atleticas",    destination: "/centros/ctc", permanent: true },
    ];
  },
};

export default nextConfig;
