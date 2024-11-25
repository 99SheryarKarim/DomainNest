/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for better debugging
  experimental: {
    appDir: true, // Explicitly enable the App Router
  },
};

export default nextConfig;
