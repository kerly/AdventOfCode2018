const fs = require('fs')

var FileUtils = {
    readFileIntoArray: function(filename) {
      var inputText = fs.readFileSync(filename).toString('utf-8')
      return inputText.split('\n')
    }
}

module.exports = FileUtils
