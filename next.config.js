/** @type {import('next').NextConfig} */

// PWA Support:
const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
