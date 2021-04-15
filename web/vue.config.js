// Vue Configuration File
module.exports = {
  pwa: {
    name: 'Cake App',
    themeColor: '#fafafa',
    msTileColor: '#fafafa',
    manifestOptions: {
      short_name: 'Cake',
      background_color: '#fafafa'
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
