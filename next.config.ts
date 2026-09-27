import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/qr", destination: "/welcome-to-osa", permanent: true },
    ];
  },
};

export default nextConfig;
