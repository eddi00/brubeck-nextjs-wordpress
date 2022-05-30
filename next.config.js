/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["data.brubeck.ru.xsph.ru"],
  },
};

module.exports = nextConfig;
