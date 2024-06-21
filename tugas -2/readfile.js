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
