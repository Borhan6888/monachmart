/** @type {import('next').NextConfig} */

const optimizedImage = require('next-optimized-images');

const nextConfig = optimizedImage({
  images: {
    disableStaticImages: true,
  },
});

module.exports = nextConfig;
