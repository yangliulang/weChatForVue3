const path = require("path");
const px2rem = require("postcss-px2rem");
const postcss = px2rem({
  //基准大小 baseSize，需要和设置html内的一致
  remUnit: 37.5
});
module.exports = {
  publicPath: "https://yangliulang.github.io/weChatForVue3/dist/",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/styles/index.less")]
    }
  }
};
