const fs = require('fs');

function getFile(fileName){
    return new Promise((resolve,reject)=>{
fs.readFile(fileName,(err,data)=>{

if(err){
    reject(err);
    return
}
else if(data){
resolve(data);
}

})


    })
}
getFile('new.txt')
.then((data)=>{console.log(data.toString())})
.catch((err)=>{console.log(err)})
