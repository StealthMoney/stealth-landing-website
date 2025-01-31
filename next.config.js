/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.staging.stealth.money/v1/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
