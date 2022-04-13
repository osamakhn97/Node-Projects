// const readLine = require('readline').createInterface({
//     input: process.stdin,
//     output:process.stdout

// })
// readLine.question("enter your name ", (name)=>{
// console.log(`hi ${name}!`);
// readLine.close();

// })
// console.log(" \n The end");
// Above code using inquirer module
const inquirer = require('inquirer');
var question = [{
    type:'input',
    name:'name',
    message:'Please enter your name'
}]
inquirer.prompt(question).then(answers=>{
    console.log(`Hi ${answers['name']}!`)
})