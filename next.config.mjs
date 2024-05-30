/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'deschide.api',
      }
    ]
  },
};

export default nextConfig;
