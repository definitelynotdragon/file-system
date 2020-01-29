const fs = require('fs')

fs.readdir ('./directory', (err, files) => {
    if (err) {
        console.log('Error when reading the new directory')
        return 
    }
    console.log(files, 'GG')
  });