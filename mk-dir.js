const fs = require('fs')

fs.mkdir('./directory', (err) => {
    if (err) throw err;
    console.log('New directory created')
  });