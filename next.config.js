/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/:path*",
          destination: "https://api.staging.stealth.money/v1/api/:path*",
        },
      ];
    }
    return [
      {
        source: "/api/:path*",
        destination: "https://api.stealth.money/v1/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
