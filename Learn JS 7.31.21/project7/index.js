let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let buttonText = "";
let screenVal = "";

for(item of buttons){
    item.addEventListener('click',(e)=>{
       buttonText = e.target.innerText;
        // console.log("button Text is:",buttonText);
        if(buttonText == "C"){
            screenVal = "";
            screen.value = screenVal;
        }
        else if(buttonText == "="){
            screen.value = eval(screenVal);
        
        }
        else{
        screenVal += buttonText;
        
        screen.value = screenVal;
        
        }



    })



}