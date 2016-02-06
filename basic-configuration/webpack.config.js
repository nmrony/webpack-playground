
var path = require('path');
  /**
   * Entry point from where webpack start bundling javascript modules.
   * It is like index.js or index.html type file from where your application
   * bootstrap start.
   *
   * entry: string/array
   */

  /**
   * Holds information where and how bundle files is/are generated and accessed by webpack
   */
module.exports = {

  entry: ['./main'],
  output: {
    path: path.join(__dirname, 'build'), //absolute path where bundled files will generate
    publicPath: './build/', // how the file can be accessed by html file
    filename: 'build.js' // name of bundled file
  }
}
