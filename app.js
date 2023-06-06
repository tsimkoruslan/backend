// //MODULES !!!
const {sayHello} = require('./Helpers/sayHello');
sayHello();

// global variables !!!

console.log('app.js');
//теперпішня деректорія до файлу звідки консоль лог
console.log(__dirname);
//до файлу запуску
console.log(__filename);
//сwd - current working directory  шлях до файлу app.js
console.log(process.cwd());

// path!!!
const path = require('path');
//шляхи
const joinedPath = path.join(__dirname, 'folder', 'folder2', 'text.txt');
const normalizePath = path.normalize('////test///test2//////twx');
//сам підставляє __dirname
const resolvePath = path.resolve('folder', 'folder2', 'text.txt');

console.log(joinedPath);
console.log(normalizePath);
console.log(resolvePath);

//os!!!
const os = require('os');
//можливість запустити баш скріпти
const {exec} = require('child_process');

console.log(os.cpus());
console.log(os.arch());
console.log(os.uptime());

//FS!!!
const fs = require('fs');
// створити новий файл з заповненням і викиданням ерорки
const text2path = path.join(__dirname, 'folder', 'folder2', 'text2.txt');
fs.writeFile(
    text2path,
    'Hello Okten people',
    (err) => {
        if (err) throw new Error(err.message);
    })
//читання файлу розшифровка (різні формати ) або toString()
fs.readFile(
    text2path,
    {encoding: 'utf-8'},
    (err, data) => {
        if (err) throw new Error(err.message);
        console.log(data)
    })
//додає до файлу
fs.appendFile(
    text2path,
    '\ntestText',
    (err) => {
        if (err) throw new Error(err.message)
    }
)
//чистить наповнення файлу
//
// fs.truncate(
//     text2path,
//     (err)=>{
//         if (err) throw new Error(err.message)
//     }
// )

// видаляє файл
// fs.unlink(
//     text2path,
//     (err)=>{
//         if (err) throw new Error(err.message)
//     }
// )

//читає файл чи є деректорія чи файл
fs.readdir(path.join(__dirname, 'folder'),
    {withFileTypes: true},
    (err, data) => {
        if (err) throw new Error(err.message)
        data.forEach(item => {
            console.log(item.isFile());
        })
    })
// cтворює нову деректорію
fs.mkdir(path.join(__dirname, 'folder', 'folder3'), (err) => {
    if (err) throw new Error(err.message)
})

//fs.rm = видаляє папку з всіма файшлами