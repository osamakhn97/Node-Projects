console.log("this is project 4");
const user = document.getElementById('user');
user.addEventListener('blur',()=>{
    let regx = /^[a-zA-Z]([a-zA-z0-9]){2,9}$/;
    let string = user.value;
    if(regx.test(string)){
        console.log("username valid")
    }
    else{
        console.log("username invalid");
    }

})
const email = document.getElementById('email');
email.addEventListener('blur',()=>{
    let string = email.value;
     //let regx = /^([_ \. \- a-zA-Z0-9+]@[_ \. \- a-zA-z0-9+] \. [a-zA-Z]){2,20}$/;
     let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if(regx.test(string)){

        console.log("email valid")

    }
    else{
        console.log("email invalid");
    }
})


const psw = document.getElementById('psw');
psw.addEventListener('blur',()=>{
   
    let regx = /^([0-9]){3,9}$/;
    let string = psw.value;
    if(regx.test(string)){
        console.log("password valid")
    }
    else{
        console.log("password invalid");
    }
})