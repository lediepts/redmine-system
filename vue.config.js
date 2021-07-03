/*
* vue.config.js
* Special config rules for this project
*/
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
