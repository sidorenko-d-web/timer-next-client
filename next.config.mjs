/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/auth',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
