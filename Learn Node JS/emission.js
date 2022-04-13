const EventEmitter = require("events");
class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('waterFull',()=>{
    console.log("please turn off the motor");
    setTimeout(() => {
        console.log("kindly turn off the motor");
    }, 3000);
})
myEmitter.emit('waterFull');
console.log("script is running");
