/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});
const nextConfig = {
  env: {
    Contact_Form_API: process.env.Contact_Form_API,
    HCaptcha_Site_Key: process.env.HCaptcha_Site_Key,
  },
};

module.exports = withPWA(nextConfig);
