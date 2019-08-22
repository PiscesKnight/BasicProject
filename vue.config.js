const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(
      type => addStyleResource(config.module.rule('sass').oneOf(type)))
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "~@/sass/theme.scss";`
      }
    }
  }
}

function addStyleResource (rule) {
  rule.use('sass-resource')
    .loader('sass-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/sass/theme.scss')
      ]
    })
}
