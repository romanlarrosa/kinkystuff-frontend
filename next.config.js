const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.kinkystuff.store",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: [
      "localhost",
      "127.0.0.1",
    ]
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
