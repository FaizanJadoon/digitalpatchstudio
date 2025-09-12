/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.xtremeemb.com",
        port: "",
        pathname: "/assets/img/**",
      },
    ],
  },
};

export default nextConfig;
