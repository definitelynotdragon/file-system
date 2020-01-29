const fs = require('fs')

fs.writeFile('test-file.txt', 'Writing sample', function(err){
    if (err) {
        console.log('Error')
    }
    console.log('Archivo nuevo')
})