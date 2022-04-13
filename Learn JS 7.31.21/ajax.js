console.log('Welcome to Ajax');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

// function buttonClickHandler() {

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','https://reqres.in/api/products/3',true);

//     xhr.onprogress = function() {
//         console.log('inprogress');
//     }

//     xhr.onload = function(){
//         if(this.status == 200){
//             console.log(this.responseText);
//         }
//         else{
//             console.log('error');
//         }
//     }
    
//     xhr.send();
// }
function buttonClickHandler() {

    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);

    xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded')

    xhr.onprogress = function() {
        console.log('inprogress');
    }

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        }
        else{
            console.log('error');
        }
    }
    parms  = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(parms);
}
// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click',popHandler);
// function popHandler(){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);

  
//     xhr.onload = function(){
//         if(this.status == 200){
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             let list = document.getElementById('list');
//             let str = "";
//             for(key in obj){
//                 str += `<li>${obj[key].employee_name}</li>`;
//             }

//             list.innerHTML = str;
//         }
//         else{
//             console.log('error');
//         }
//     }
  
//     xhr.send();

// }
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);
function popHandler(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true);

  
    xhr.onload = function(){
       
        if(this.status == 200){
            
            let obj = JSON.parse(this.responseText);
          
            
            console.log(obj);
                 let list = document.getElementById('list');
            let str = "";
            for(let i = 0 ; i<obj.data.length; i++){
                        str += `<li>${obj.data[i].name}</li>
                                <li>${obj.data[i].degree}</li>
                                <hr>
                        
                        
                        `;
                        
                    }
                   
            list.innerHTML = str;
       
       }
        else{
            console.log('error');
        }
    }
  
    xhr.send();

}