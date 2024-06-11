const fs = require ('fs');
fs.readFile('latihan-baca-file.txt','utf-8',(err,data)=>{
    // try {
    //     console.log(data)
    // } catch (err) {
    //     console.log(err)
    // }
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
});

const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log(`Server is running at <http://localhost>:${port}`);
})

const testmodule = require('./testmodule');
const a = 5;
const b = 5;
const sum = testmodule.sum(a,b);
const min = testmodule.min(a,b);
const multiply = testmodule.multiply(a,b);
const divide = testmodule.divide(a,b);
console.log(`number a: ${a} number b: ${b}`,{sum,min,multiply,divide})
