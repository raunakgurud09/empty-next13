// import { withContentlayer } from "next-contentlayer"
const { withContentlayer } = require("next-contentlayer");


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.hashnode.com"],
  },
};

module.exports = nextConfig;
// export default withContentlayer(nextConfig)

