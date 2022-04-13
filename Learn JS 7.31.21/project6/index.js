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
let removeParam ;
addBtn.addEventListener('click',()=>{
    btnCount++;

    let parametersBox = document.getElementById('parametersBox');
       str = `<input type="text" id="key${btnCount+1}" placeholder="enter parameter key${btnCount+1}">
       <input type="text" id="value${btnCount+1}" placeholder="enter parameter value${btnCount+1}">
       <button class="removeParam" id="remove${btnCount+1}">-</button>`;
       

    let div = document.createElement('div');
    div.innerHTML = str;
    parametersBox.appendChild(div);
    
     removeParam = document.getElementsByClassName('removeParam');
     console.log(removeParam);
    for (item of removeParam){
        item.addEventListener('click',(e)=>{
            e.target.parentElement.remove();

        })
  }

  
})
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name ='requestType']:checked").value;
    let contentType = document.querySelector("input[name ='contentType']:checked").value;
    


    if(contentType=='param'){
        data = {};
        for(let i=0; i<=btnCount; i++){
            if(document.getElementById('key'+(i+1))!= undefined || document.getElementById('value'+(i+1))!= undefined){
            let key = document.getElementById('key'+(i+1)).value;
            let value = document.getElementById('value'+(i+1)).value;
            data[key]=value;
        }
        data = JSON.stringify(data);
        }

        

    }
    else{

        data = document.getElementById('jsonText').value;
    }
    console.log("Request Type:",requestType);
    console.log("URL:",url);
    console.log("Content Type:",contentType);
    console.log("Data:",data);

    if(requestType=='get'){
        fetch(url,{
            method:'GET'
        })
        .then(response => response.text())
        .then((text)=>{
            document.getElementById('responsePrism').innerHTML=text;
            Prism.highlightAll();



        })


    }
    else{
        fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
                
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }


    




})
