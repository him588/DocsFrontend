/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    url: process.env.url,
    // url: "https://docsbackend-vp65.onrender.com",
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
