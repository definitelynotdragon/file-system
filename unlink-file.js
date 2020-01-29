const fs = require('fs')

fs.unlink('./test-file.txt', function(err) {
    if (err)
    console.log('The test file.txt was deleted')
  });