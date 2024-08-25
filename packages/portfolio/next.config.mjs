/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    staleTimes: {
      dynamic: 60,
      static: 3600,
    },
  },
};

export default nextConfig;
