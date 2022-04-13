const f1 = ()=>console.log('this is f1');
const f2 = ()=>console.log('this is f2');
const f3 = ()=>{
    console.log('this is f3');
    setTimeout(() => {
        f1();
    }, 0);
    new Promise((resolve,reject)=>{
        resolve("function resolved");

    }).then(resolve=>console.log(resolve));

f2();

}
f3();