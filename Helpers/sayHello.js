function sayHello (){
    console.log('Hello');
//теперпішня деректорія
    console.log(__dirname);
//до файлу запуску console.log
    console.log(__filename);
//сwd - current working directory шлях до файлу app.js
    console.log(process.cwd());
}

module.exports = {
    sayHello
}