const fs = require('fs');
// fs.readFile('file.txt','utf-8',(err,data)=>{
// console.log(err,data);

// })
// console.log('file read successfully');
const a = fs.readFileSync('file.txt');
console.log(a.toString());
console.log("Success");

// fs.writeFile('new.txt','Hello I am Osama',()=>{

//     console.log("written successfully")
// })
// console.log("success");

