process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports ={
  resolve: {
    extensions: ['.js', '.jsx']  //Working
  }
 environment.toWebpackConfig()
