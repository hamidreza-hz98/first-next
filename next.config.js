/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    IMAGE_URL: process.env.IMAGE_URL,
  },

  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
