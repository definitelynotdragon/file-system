const fs = require('fs')

fs.rmdir ('./directory', (err, files) => {
    if (err) {
        console.log('Error when deleting the directory')
        return 
    }
    console.log('Directory was removed')
  });