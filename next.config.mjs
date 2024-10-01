/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    url: process.env.URL,
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
