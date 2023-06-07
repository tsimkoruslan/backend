//EVENTS!!!

const events = require('node:events');

const eventEmitter = new events();

eventEmitter.on('click',(data)=>{
    console.log(data)
// якщо метод once то він помре після 1 відпрацювання
    // eventNames логає усі івенти якщо після once то не покаже бо він здох
    console.log('click click')
})

eventEmitter.emit('click', {data:'Hello'});


//STREAM!!!

const fs = require('node:fs');
const path = require('node:path');

// є 4 стріма read, write, duplex (zlib пакує файли), transform

const readStream = fs.createReadStream('text.txt', { highWaterMark: 128 * 1024 });
const writeStream =fs.createWriteStream('text2.txt');
// readStream.on('data', (chunk)=>{
//     writeStream.write(chunk)
// })

readStream
    .on('error', ()=>{
        readStream.destroy();
        writeStream.end('error file');
    })
    .pipe(writeStream)

//EXPRESS!!!

 const express = require('express');

const app = express();
const PORT = 5005;
const cars = [
    {name: "Audi"},
    {name: "WV"},
    {name: "Kia"}
]
//далі пост патч і тд там пушимо і так далі
app.get('/:carId',(req, res)=>{

    //можна відправити обєкти але сендом відправляють тільки стрічку
    // res.send('hello from /' )
   const {carId} = req.params;
    res.status(200).json(
        cars[+carId]
    )
})
app.listen(PORT, ()=>{
    console.log('Start port')
})
