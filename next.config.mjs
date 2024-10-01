/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    url: "http://localhost:8000",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
