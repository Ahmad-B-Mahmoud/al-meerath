/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});
const nextConfig = {
  env: {
    NEXT_PUBLIC_Contact_Form_API: process.env.NEXT_PUBLIC_Contact_Form_API,
    NEXT_PUBLIC_HCaptcha_Site_Key: process.env.NEXT_PUBLIC_HCaptcha_Site_Key,
  },
};

module.exports = withPWA(nextConfig);
