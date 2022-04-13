console.log('Postman Clone');
document.getElementById('parametersBox').style.display = 'none';
let json = document.getElementById('json');
json.addEventListener('click',()=>{
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('jsonBox').style.display = 'block';
})
let param = document.getElementById('param');
param.addEventListener('click',()=>{
    document.getElementById('parametersBox').style.display = 'block'
    document.getElementById('jsonBox').style.display = 'none';
})

function newDiv(string){
    
}

let btnCount = 0;
let addBtn = document.getElementById('add');
let str = "";
addBtn.addEventListener('click',()=>{
    btnCount++;

    let parametersBox = document.getElementById('parametersBox');
       str = `<input type="text" id="key${btnCount+1}" placeholder="enter parameter key${btnCount+1}">
       <input type="text" id="value${btnCount+1}" placeholder="enter parameter value${btnCount+1}">
       <button class="removeParam" id="remove${btnCount+1}">-</button>`;
       

    let div = document.createElement('div');
    div.innerHTML = str;
    parametersBox.appendChild(div);
    
    let removeParam = document.getElementsByClassName('removeParam');
    for (item of removeParam){
        item.addEventListener('click',(e)=>{
            e.target.parentElement.remove();

        })


    }
    
    

})
