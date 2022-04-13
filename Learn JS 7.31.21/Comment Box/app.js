console.log('welcome to comment Box');
let out = document.getElementById('output');
let comment = document.getElementById('comment');
comment.addEventListener('click',()=>{
 let cmt = document.createElement('textarea');
 cmt.id = "commentBox";
 let names = document.createElement('input');
 names.id = "names";
 names.setAttribute('type','text');
 names.setAttribute('placeHolder','enter name');
 let btn = document.createElement('button');
 btn.id = "btn";
 btn.innerHTML= "Submit";
  comment.replaceWith(names,cmt,btn);
  document.getElementById('btn').addEventListener('click',()=>{
      let msgs = localStorage.getItem('data');
      if(msgs == null){
          myArr = [];
      }
      else{
          myArr = JSON.parse(msgs);
      }
let myObj = {
    'name':names.value,
    'comment':commentBox.value,
}
myArr.push(myObj);

localStorage.setItem('data',JSON.stringify(myArr));

display();
})


  
})

function display(){
    let msgs = localStorage.getItem('data');
    if(msgs == null){
        myArr = [];
    }
    else{
        myArr = JSON.parse(msgs);
    }
    console.log(myArr);
    let str = "";
myArr.forEach(element => {
    
    str += `<p><b>${element.name}</b> :${element.comment}</p></hr>`;
    
});
out.innerHTML = str;


}
display();