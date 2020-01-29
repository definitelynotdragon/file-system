const fs = require('fs')

fs.copyFile('test-file.txt', 'copy-of-file.txt', function(err){
  if (err) throw err;
  console.log('test-file.txt was copied to copy-of-file.txt');
})