const { defineConfig } = require("@vue/cli-service");
const path = require("path"); // Если ранее не была подключена зависимость

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://dev-promo23.click.uz/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
