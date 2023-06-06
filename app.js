const fs = require('fs');
const path = require("path");

fs.mkdir(path.join(__dirname, 'mainPage'), (err) => {
    if (err) throw new Error(err.message);
    for (let i = 0; i < 5; i++) {
        fs.mkdir(path.join(__dirname, 'mainPage', `page${i}`), (err) => {
            if (err) throw new Error(err.message)
            fs.writeFile(path.join(__dirname, 'mainPage', `page${i}`, `${i}info.txt`), 'Info page text', (err) => {
                if (err) throw new Error(err.message)
            });
        });
    }
    fs.readdir(path.join(__dirname, 'mainPage'),
        {withFileTypes: true},
        (err, files) => {
            if (err) throw new Error(err.message)
            files.forEach(i => {
                if (i.isFile()) {
                    console.log(`${i } is FIle!`)
                }
                if (i.isDirectory()) {
                    console.log(`${i} is Folder!`)
                }
            })
        }
    )
});
