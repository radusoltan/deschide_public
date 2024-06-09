/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'alpha.deschide.md',
      }
    ]
  },
};

export default nextConfig;
