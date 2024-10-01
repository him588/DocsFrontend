/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL: process.env.URL,
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
