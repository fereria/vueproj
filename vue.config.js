const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/project-name/',
  outputDir: 'docs'
})
