console.log('this is tic tac toe');
let p;
let p1 = document.getElementById('player1');
let p2 = document.getElementById('player2');
let playerSelect = document.getElementById('playerSelect');
p1.addEventListener('click',run);
p2.addEventListener('click',run);
let str  = "";

function run(){

 p = document.querySelector('input[name="player"]:checked').value;
 let b1 = document.getElementById(1).innerText;
 let b2 = document.getElementById(2).innerText;
 let b3 = document.getElementById(3).innerText;
 let b4 = document.getElementById(4).innerText;
 let b5 = document.getElementById(5).innerText;
 let b6 = document.getElementById(6).innerText;
 let b7 = document.getElementById(7).innerText;
 let b8 = document.getElementById(8).innerText;
 let b9 = document.getElementById(9).innerText;
 if((b1=='0' && b2=='0' && b3 == '0') || (b1=='0' && b4=='0' && b7 == '0' ) || 
 (b1=='0' && b5=='0' && b9 == '0') || (b3 == '0' && b6 == '0' && b9 == '0') ||
 (b7=='0' && b8 == '0' && b9 == '0') || (b2 == '0' && b5 == '0' && b8 == '0')
 ){
    setTimeout(() => {
        alert('player 1 wins');
        window.location.reload();
     }, 2000);



 }
 else if((b1=='X' && b2=='X' && b3 == 'X') || (b1=='X' && b4=='X' && b7 == 'X' ) || 
 (b1=='X' && b5=='X' && b9 == 'X') || (b3 == 'X' && b6 == 'X' && b9 == 'X') ||
 (b7=='0' && b8 == 'X' && b9 == 'X') || (b2 == 'X' && b5 == 'X' && b8 == 'X')){
     setTimeout(() => {
        alert('player 1 wins');
        window.location.reload();
     }, 2000);


 }


}

let box = document.querySelectorAll('span');


for (item of box){
   
    
    item.addEventListener('click',(e)=>{

        

        if(p=="player1"){
            if(e.target.innerText == "0" || e.target.innerText == "X" ){
                console.log("already filled")
            }
            else{
            e.target.innerText = "X";
         str = `<label for="Player1(0)">Player1(X)</label>
         <input type="Radio" value="player1" name="player" id = "player1">
         <label for="Player2(x)">Player2(0)</label>
         <input type="Radio" value="player2" name="player" id = "player2" checked>`;
         playerSelect.innerHTML = str;
         run();
            }
        }
        else if(p=="player2"){
            if(e.target.innerText == "0" || e.target.innerText == "X"){
                console.log("already filled")
            }
            else{
            e.target.innerText = "0";
            str = `<label for="Player1(0)">Player1(X)</label>
            <input type="Radio" value="player1" name="player" id = "player1"checked>
            <label for="Player2(x)">Player2(0)</label>
            <input type="Radio" value="player2" name="player" id = "player2" >`;
            playerSelect.innerHTML = str;
            run();
      
            }


        }


    })
}
run();

