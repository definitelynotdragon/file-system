const fs = require('fs')

fs.appendFile('./test-file.txt', '\ndata or text that has been appended', 'utf8', (err) => {
    if (err) throw err;
    console.log('The "data or text that has been appended" was appended to file!');
  });