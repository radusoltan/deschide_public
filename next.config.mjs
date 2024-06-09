/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.deschide.md',
      }
    ]
  },
};

export default nextConfig;
