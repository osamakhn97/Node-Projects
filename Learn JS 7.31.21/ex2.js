console.log("Welcome to ex2");

let textArea= document.createElement('textarea');
textArea.className="textArea";
textArea.innerText="Edit here";
textArea.id="textArea";
textArea.style= 'border:2px solid black; height:100px;'

let edit= document.getElementById('edit');
let textDiv= document.getElementById('textDiv');
textDiv.addEventListener('click',function(){
    console.log('clicked');

    textDiv.replaceWith(textArea);
    textArea.focus();


    
})

textArea.addEventListener('onblur',function(){
    console.log('clicked out');
    let val = document.getElementById('textArea').value;
    localStorage.setItem('myText',val);
    textArea.innerText=localStorage.getItem('myText');
    textDiv.innerText=localStorage.getItem('myText');
    textArea.replaceWith(textDiv);


})
textArea.innerText=localStorage.getItem('myText');
textDiv.innerText=localStorage.getItem('myText');