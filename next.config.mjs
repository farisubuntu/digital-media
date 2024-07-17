/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "xsgames.co",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "readymadeui.com",
        port: "",
        pathname: "/**",
      },

    ],
  },
};

export default nextConfig;
