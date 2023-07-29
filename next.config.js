// const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|avi|mkv)$/i, // Add any video file extensions you want to support
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/",
          name: "static/videos/[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};
