// console.log("This is an error");
// jj
// 3. Variables
// var number1=34;
// var number2=56;
// // console.log(number1+number2);
// //Data types
// var string = "this is string";
// var string1= "This is also a string";

// //objects
// var marks ={
//     Ali:50,
//     Ahmed:60,
//     Harry:90
// }
// // console.log(marks);
// var a=  true;
// var b= false;
// // console.log(a,b);

// var ar = [1,2,"Lato",3,9];
// // console.log(ar);

// var x =22;
// var y =50;
// console.log(x==y);

// function avg(a, b){
//     return (a+b)/2;
// }

// c1 = avg(2,6);
// c2 = avg(5,5);
// console.log(c1,c2);

// age = 18;
// if(age>=18){
//     console.log("You can drive");
// }
// else{
//     console.log("You can't drive")
// }
// function agev(a){
//     if(a>=18){
//     alert("you can drive");

//     }
//     else if(a>=16 && a<18){
//         alert("give him learning");
//     }
//     else{
//         alert("you are not eligible");
//     }
// }

// var age= prompt("enter age");
// agev(age);

// var a = [1,2,3,4,5,6,7,8,9];
// a.forEach(function(element){
//     console.log(element);
// })
// 
// let strg= "My name is khan";
// // console.log(strg.indexOf("name"));
// // console.log(strg.slice(0,6));
// d=strg.replace("khan","Osama");
// console.log(d,strg);

// let date= new Date();
// d=date.getHours();
// if(d<12){
//     a="AM";
// }
// else{
// a="PM";
// }
// console.log(date.getTime()+a);
// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// // elemClass[1].style.background = "green";
// elemClass[1].classList.add("bg-primary");
// tn = document.getElementsByTagName("div");
// console.log(tn);
// createdElement=document.createElement('p');
// createdElement.innerText="this is the best paragraph";

// tn[1].appendChild(createdElement);

// createdElement2= document.createElement("b");
// createdElement2.innerText="This is bold";
// tn[1].replaceChild(createdElement2, createdElement);

// firstContainer.addEventListener('click',function(){
//     console.log("Click ho gya");
// })

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>Clicked</b>"

// })
// sum = (a,b) =>{
//     return a+b;
// }
// logKaro = () =>{
//     console.log("I am your log");
// }
// // setTimeout(logKaro,3000);
// clr=setInterval(logKaro,3000);
// obj={
//     name:"Osama",
//     length:2,
//     a:{
//         this:'tha\ "t',
//     },

// }
// jso=JSON.stringify(obj);
// console.log(jso);
// parsed=JSON.parse(`{"name":"Osama","length":2,"a":{"this":"tha\\"t"}}`);
// console.log(parsed);

// 

// function greet(name, thanks) {
// console.log(`Dear ${name} Let my prayer be the key to open your day… May Allah touch your life with joy, 
// bless your heart with love and comfort your soul with peace. ${thanks}`);
// return 7;
// }
// let name='Ali';
// let name1= 'Ahmmad';

// let val = greet(name1,'Thanks');
// console.log(val);

// function greet(name, thanks='Thanks alot') {
//     let msg = `Dear ${name} Let my prayer be the key to open your day… May Allah touch your life with joy, 
//     bless your heart with love and comfort your soul with peace. ${thanks}`;
//     return msg;
//     }
//     let name='Ali';
//     let name1= 'Ahmmad';

//     let val = greet(name1);
//     console.log(val);
// Expression Functions
// var greet =function(name, thanks='Thanks alot') {
//     let msg = `Dear ${name} Let my prayer be the key to open your day… May Allah touch your life with joy, 
//     bless your heart with love  and comfort your soul with peace. ${thanks}`;
//     return msg;
//     }
//     let name='Ali';
//     let name1= 'Ahmmad';

//     let val = greet(name1);
//     console.log(val);
//     myObj = {
//         Name:'Osama',
//         game: function(){
//             return "GTA Vice City";

//         },
//     }

//     console.log( myObj.game());
//     arr = ['Osama','khan', 'G'];
//     arr.forEach(function(element,index,array){
//         console.log(element,index);

//     });
// let a =document.images;
// console.log(a);

// // Array.from(a).forEach(element => {
// //     console.log(element);

// // });
// Array.from(a).forEach(element => {
//     console.log(element)
// });
// let b = document.scripts;
// console.log(b);
// Array.from(b).forEach(element => {
//     console.log(element)
// });
// let a=document.links;
// let b = Array.from(a);
// let txt="com";
// console.log(a);
// let arr=[];
// b.forEach((element) => {
//   if (String(element.href).includes(txt)){
// console.log(element)
//   }


// });


// let element=document.createElement('li');
// element.className='w';
// element.innerText="Hello, this element is created by Osama Khan";

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(element);

// let elem2 = document.createElement('h3');
// elem2.className='w';
// let textNode= document.createTextNode('The message is replaced');

// elem2.appendChild(textNode);

// element.replaceWith(elem2);

// let myUl = document.getElementById('myUl');

// // myUl.replaceChild(elem2,document.getElementById('first'));
// myUl.replaceChild(document.getElementById('last'),document.getElementById('first'));

// let elem2 = document.createElement('a');




// elem2.setAttribute('href','https://codewithharry.com');
// elem2.innerHTML=' Code With Harry ';
// let elem1= document.getElementById('heading');

// elem1.appendChild(elem2);
// let uli = document.querySelector('h1#heading');


// uli.appendChild(elem2);
// console.log(elem2);
// document.getElementById('heading').addEventListener('click',function(e){
// let var1=e.offsetX;
// let var2=e.offsetY;
//     console.log('heading was clicked');
//     console.log(var1,var2);

// });

// document.querySelector('.container').addEventListener('mousemove',function(e){
//     let var1 = e.offsetX;
//     let var2 = e.offsetY;
//     console.log(var1, var2);
//     document.body.style.backgroundColor = `rgb(${var1},${var2},200)`;
// })

// let arr = ['adrk','gajjar','mooli'];
// localStorage.setItem('sabzi',JSON.stringify(arr));

// console.log(JSON.parse(localStorage.getItem('sabzi')));

// let z = 6*Math.random();
// z = Math.ceil(z);
// console.log(z);

// alert(z);

// Constructors
// function generalCar(givenName,givenSpeed){
//     this.name = givenName;
//     this.speed = givenSpeed;
//     this.run = function(){
//         console.log(`${this.name} is running`);

//     }
// }

// car1 = new generalCar('Mehran',120);
// car2 = new generalCar('GLI', 200)
// car1.run();
// car2.run();
// -----------
//console.log('welcome');
// const proto = {
//     slogan : function(){
//         return 'this company is the best';

//     },
// changeName: function(newName){
//     this.name = newName;
// },
// }
// // this creates an object
// const Harry = Object.create(proto);
// Harry.name = 'Osama';
// Harry.role = 'Programmer';
// Harry.changeName('Haris');
// console.log(Harry);
// //this also creates an object

// const harry1 = Object.create(proto,{
//     name:{value: "harry1" , writable :true},
//     role:{value:"programmer",writable:false}

// });
// harry1.name= 'Osama';
// harry1.role = 'developer';
// console.log(harry1);

// function Employee(newName,NewSalary,newExperience){
//     this.name = newName;
//     this.salary = NewSalary;
//     this.experience = newExperience;
// }

// Employee.prototype.slogan = function(){
//     return `this company is the best regards, ${this.name}`;

// }
// let harryObj = new Employee('Osama',4343932,51);
// console.log(harryObj.slogan());

// function flour(taste, color){
//     this.taste = taste;
//     this.color = color;

// };
// flour.prototype.slogan = function(){
//     return ` This is very delicious`;
// };

// let make = new flour('sweet','brown');
// console.log(make.slogan());

// function cake(flavour,taste,color){
//     flour.call(this,taste,color);
// this.flavour = flavour;

// }
// //manusally set the constructor and protoType
// cake.prototype = Object.create(flour.prototype);
// cake.prototype.constructor = flour;

// let makeCake = new cake('banana','Salty','Almond');

// console.log(makeCake.slogan());
//---------------------------------------------------------
// ES 6 Classes Ex 4
// class library{

//     constructor(booklist){

//         this.booklist = booklist;
//         this.issuedBook = {};
//     }
//     getBookList(){
//         console.log('Available Books');
//         this.booklist.forEach((element,index) => {

//             console.log(`${index+1} ${element}`);


//         });
//     }
// issueBook(bookName,user){

//     this.bookName = bookName;
//     this.user = user;
//     if(this.issuedBook[bookName] == undefined){
//         this.issuedBook[bookName] = user;
//         console.log('Book issued Successfully');
//     }
//     else{
//         console.log('book is already issued');
//     }

// }
// returnBook(bookName){
//     this.bookName = bookName;
//     if(this.issuedBook[bookName] == undefined){
//         console.log('Nothing to return');
//     }
//     else{
//         delete this.issuedBook[bookName];
//         console.log('Book returned Successfully');
//     }
// }
// }

// let list = ['english','urdu','maths','oop'];
// let lib = new library(list);
// lib.getBookList();

// lib.issueBook('english','sirfraz');
// lib.issueBook('english','Ali');
// // lib.returnBook('english');
// lib.issueBook('urdu','sirfraz');

// lib.returnBook('maths');
// lib.returnBook('urdu');
// lib.returnBook('english');
// lib.returnBook('oop');
// ///-----------------------------------------The End -----------------------------
// console.log('tut 34');

// setTimeout(() => {
//     for (let i = 0 ; i<4000 ; i++){
//         const element = i;
//         console.log(i);

//     }
// }, 100);
// -------------------------------------------The End-----------------------------
// console.log('done');
// console.log('TUT 37');
// let list = document.getElementById('list');
// let students = [
//     {'name': 'Osama','Subject':'Java' },
//     {'name': 'Ali' ,  'Subject': 'OOp'}

// ];
// function enrollStudents(student,callback){
//     setTimeout(() => {
//         students.push(student);
//         callback();

//     }, 3000);
// }

// function fetchStudents(){
//     setTimeout(() => {
//         let str = "";
//         students.forEach(element => {
//             str += `<li>${element.name}</li>
//                     <li>${element.Subject}</li>
//                     <hr>`;

//         });
//         list.innerHTML = str;
//     }, 1000);
// }
// let addStd = {'name':'Asad','Subject':'maths'};
// enrollStudents(addStd,fetchStudents);
//----------------------------------------------------------------
//------------------Promises--------------------------------------
// console.log('TUT 39');
// let list = document.getElementById('list');
// let students = [
//     { 'name': 'Osama', 'Subject': 'Java' },
//     { 'name': 'Ali', 'Subject': 'OOp' }

// ];
// function enrollStudents(student) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = false;
//             if (!error) {
//                 students.push(student);
//                 console.log('student has been enrolled');
//                 resolve();

//             }
//             else {
//                 reject();
//             }
//         })
//     }, 3000);

// }

// function fetchStudents() {
//     setTimeout(() => {
//         let str = "";
//         students.forEach(element => {
//             str += `<li>${element.name}</li>
//                     <li>${element.Subject}</li>
//                     <hr>`;

//         });
//         list.innerHTML = str;
//     }, 1000);
// }
// let addStd = { 'name': 'Asad', 'Subject': 'maths' };
// enrollStudents(addStd).then(function () {
//     fetchStudents();
// }).catch(function () {

//     console.log('some error occured');

// });
//-------------------------Fetch API----------------------------------
// console.log('fetch API');
// function getFetch(){
//     url = 'data.json';
//     fetch(url).then(Response=>{return Response.text();})
//     .then(data => {console.log(data)})
// }
// getFetch();

// function postFetch(){

// url = "https://dummy.restapiexample.com/api/v1/create";
// data = '{"name":"test11","salary":"123","age":"23"}';
// params = {
//     method: 'post',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
// body: data    
// }

// fetch(url, params).then(response =>  response.json())
// .then(data => console.log(data))

// }
// postFetch();
// ---------------------------------End --------------------
// let data = {
//     first_name: 'John',
//     last_name: 'Adams',
//     job_title: 'Software Engineer'
//  };
//  const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//  }
//  }
//  fetch('https://reqres.in/api/users', options)
//     .then(res => res.json())
//     .then(res => console.log(res));
// ---------------------------------------------------------------
// console.log('tut 43');

// async function harry(){

//     console.log('inside harry fuction');
//      const response = await fetch('https://api.github.com/users');
//      console.log('before response');
//      const users = await response.json();
//      console.log('user resolved');
//      return users; 

// }
// console.log("before calling harry")
// let a = harry();
// console.log("after calling harry")
// console.log(a);
// a.then(data => console.log(data))
// console.log('last line  of js file');
// ------------------------------------------------------------
// console.log('tut 46');
// let reg = /harry/g;
//  let s = 'this is great code with harry and  harry potter';

//  let result1 = reg.exec(s) ;
//  console.log(result1);

//  let result2 = s.match(reg);
//  console.log(result2);

//  let result3 = reg.test(s);
//  console.log(result3);

//  let result4 = s.search(reg);
//  console.log(result4);

//  let result5 = s.replace(reg,'Osama');
//  console.log(result5);
// ------------------------Meta Characters------------------------------------------
// //  const reg = /^Its/i;
// // const reg = /bhai$/i;
// // const reg = /osa.a/i;
// // const reg = /osa*a/i;
// // const reg = /oss?amm?a/i;
// const reg = /bhai\*/i;

//  const s = "its good to code with osama bhai*";

// //  const s = "its good to code with osama bhai";

// if(reg.exec(s)){
//     console.log(`the expression ${reg.source} matches the string ${s}` );
// }
// else{
//     console.log(`the expression ${reg.source} does not match the string ${s}` );
// }
//--------------------------Character Sets---------------------------------------------------
//  let reg = /osam[a-z]/;
//  reg = /osam[x-z]/;
//  reg = /osam[abcde]/;
//  reg = /osam[^abcde]/;
//  reg = /osam[a-zA-z]/;
//  reg = /osam[abc0-9]/;
// //  reg = /osama{2}/;
//  reg = /osam{0,2}a/;
//  reg = /(osama){2} ([0-9]g)/;





//  const s = "osamaosama 1g2g3g bhai";



// if(reg.exec(s)){
//     console.log(`the expression ${reg.source} matches the string ${s}` );
// }
// else{
//     console.log(`the expression ${reg.source} does not match the string ${s}` );
// }
// --------------------------------CHARACTER CLASSES--------------------------
// let reg;
// reg = /\w+gbhai/;
// reg = /\W+gbhai/;
// reg = /aa\d+gbhai/;
// reg = /aa\dgbhai/;
// reg = /aa\Dgbhai/;
// reg = /aa\s+gbhai/;
// reg = /aa\S+gbhai/;
// reg = /osama\b/;
// //---------Assertions
// reg = /osama(?=k)/;
// reg = /osama(?!k)/;
 
// const s = "osamak aaagbhai";
// if (reg.exec(s)) {
//     console.log(`the expression ${reg.source} matches the string ${s}`);
// }
// else {
//     console.log(`the expression ${reg.source} does not match the string ${s}`);
// }
// ------------------------------Iterators----------------------------------

// function fruitIterators(values){
//     let nextIndex = 0;

//     return{
//        next: function(){
//            if(nextIndex<values.length){

//              return { 
//                  value: values[nextIndex++],
//                  done:false
//              }


//            }
//            else{
//                return{
//                 done:true
//                }
               
//            }


//        }


//     }
// }



// const myArray = ['Apple','grapes','mango','Oranges'];
// let fruits= fruitIterators(myArray);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// --------------------------Alarm Clock Exercise--------------------------
// let alarm = document.getElementById('alarm');
// let set = document.getElementById('set');
// set.addEventListener('click',setAlarm);
// function ringingBell(){
// console.log('ringing');

// }
// function setAlarm(){
        
// console.log('setting Alarm');
// let date = new Date(alarm.value);
// now = new Date();
// let rem = date-now;
// console.log(rem);
// if(rem>=0){
//     setTimeout(() => {
//         ringingBell();
//     },rem);
// }

// }
// // optional if you want to use regular expressions for setting date and time.
// let regx = /^([0-9]){4}\s([0-9]){1,2}\s([0-9]){1,2}\s([0-9]){1,2}\:([0-9]){1,2}$/;
// let str = '2376 9 1 2:30';

// if(regx.test(str)){
//     console.log("string matched");
// }
// else{
//     console.log("string not matched");
// }

// **************For in vs for of loop ********************
// let a = [
// {
//     "name":"Osama",
//     "city":"Rawalpindi"
// },
// {
//     "name":"Ahmad",
//     "city":"Islamabad"
// },
// {
//     "name":"Ali",
//     "city":"Peshawar"
// },
// {
//     "name":"Bilal",
//     "city":"Multan"
// }
// ];
// for (let key in a){
//     console.log(a[key].name);
//     console.log(a[key].city);
// }
// ************************Maps in JS ************************
// const myMap = new Map();
// const key1 = "myString", key2 = {}, key3 = function(){};

// myMap.set(key1, "this is an empty string");
// myMap.set(key2, "this is an empty Object");
// myMap.set(key3, "this is an empty function");



// myMap.forEach((value,key)=>{

//     console.log(value);
//     console.log(key);
// })

// console.log("Array is",Array.from(myMap));

// for(let [key,value] of myMap){
//     console.log("key is:" , key);
//     console.log("value is:", value);
// }

// for (let key of myMap.keys()){
//     console.log("only key is:",key);

// }

// for (let value of myMap.values()){
//     console.log("only value is:",value);

// }
// *******************Sets in JS*****************************
// converting array to set and back to array to avoid duplication
// const array = ['ali','zeeshan','Bilal','ali','shah','shah','shah'];
// console.log("Mixed array:",array);
// const mySet = new Set(array);
// const pureArray = Array.from(mySet);
// console.log("Filtered array :",pureArray);

// console.log(mySet.has('shah'));
// console.log(mySet.has('basit'));
// ***********************symbols in Java Script****************
// const k1 = Symbol("identifier for k1");
// const k2 = Symbol("identifier for k2");
// console.log(k1==k2);
// let obj = {};
// obj[k1] = "Ali";
// obj[k2]= "Haider";
// console.log(k1,obj[k1]);
// console.log(k2,obj[k2]);
// **********************Destructuring *************************
// [a,b,c, ...d] = [1,2,3,4,5,6,7,8,9,10,11];
// // console.log(a,b,c,d);

// ({a,b,c, ...d}= {a:25, b:26 ,c:27, d:28, e:29 });
// // console.log(a,b,c,d);

// const fruits = ['apple','mango','banana','orange'];
// [a,b,c,d] = fruits;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);

// const myObj = {
//     name:"Haris",
//     age:24,
//     degree:"bscs",
//     start:function(){console.log("function started")}
// }
// const {name,age,degree,start} = myObj;

// console.log(name,age,degree);

// start();

// ************************Spread Operator***************************
// let arr = [4,5,6,7,8];
// // function avg(a,b,c){
// //     return a+b+c/3;
// // }
// // console.log(avg(...arr));

// // let ar2 = [40,50,...arr,60];
// // console.log(ar2);

// let obj1 = {
//     name:"Osama",
//     class:"Bscs",
//     Job:"Web Developer"
// }
// // We are copying the data of obj1 to obj 2 except the job item
// let obj2 = {...obj1, Job:"Graphic designer"};
// console.log(obj1);
// console.log(obj2);
// *********************Destructuring revision************************
// let obj1 = {
//         name1:"Osama",
//         class1:"Bscs",
//         Job:"Web Developer"
//     }
// // we have extracted the items from the object using destructuring
//     let{name1,class1,Job}= obj1;
//     console.log(name1,class1,Job);
// *********************Async***************************************
// console.log("Osama is good boy");
// setTimeout(() => {
//     console.log("Osama is inside time Interval");
// }, 1000); 
// console.log("Osama is bad Boy");
// *********************Call Back and Promises Revision*******************
// async function harry(){

//     console.log('inside harry fuction');
//      const response = await fetch('https://api.github.com/users');
//      console.log('before response');
//      const users = await response.json();
//      console.log('user resolved');
//      return users; 

// }
// console.log("before calling harry")
// let a = harry();
// console.log("after calling harry")
// console.log(a);
// a.then(data => console.log(data))
// console.log('last line  of js file');
// *************************Maps Revision ******************************
// let a = [1,2,3,4,5];
// let a2 = a.map((value)=>{
// return value*6;

// });
// console.log(a2);
// console.log(a);
// // filter
// let a4 = [10,4,6,70,500,1,900,-1];
// let a3 = a4.filter((value)=>{
// return value>10

// })

// console.log(a3);
// console.log(a4);

// //reduce
// let a5 = a.reduce((val1 , val2)=>{
//     return val1+val2;
// })
// console.log(a5);
//**********************Triple Equality *******************************
 // this will return true as JS will convert "1" and 1 into same data 
// type and then compare it
if(1=="1"){
    console.log("true")
}

//  "===" will compare with datatype also
if(1 === "1"){
    console.log("true")
}
else{
    console.log("false")
}