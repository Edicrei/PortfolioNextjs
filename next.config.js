/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['img.icons8.com', 'i.imgur.com'],
  },
};

module.exports = nextConfig;
