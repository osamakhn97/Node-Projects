console.log("this is index.js");

//constructor function
function Book(name,author,type){
this.name=name;
this.author=author,
this.type=type
}
//display Constructor
function Display(){
    
}
// Add methods to display prototype
// Display.prototype.add = function(book){
// let tableBody = document.getElementById('tableBody');
// let uiString = `
//             <tr>
                                
//             <td>${book.author}</td>
//             <td>${book.name}</td>
//             <td>${book.type}</td>
//             </tr>`;
//             tableBody.innerHTML += uiString;
// }
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2){
        return false
    }
    else{
        return true
    }
}

Display.prototype.show = function(type,messagew){
    let message = document.getElementById('message');
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${messagew}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
setTimeout(() => {
    message.innerHTML = ` `;
}, 2000);

}
Display.prototype.addToStorage = function(book){
    let bName = book.name;
    let aName = book.author;
    let bType = book.type;
    let bookDetail = localStorage.getItem('bookDetail');
    if(bookDetail == null){
        bookObj = [];
    }
    else{
        bookObj = JSON.parse(bookDetail);
    }
    let myObj = {
        'Name': bName,
        'Author':aName,
        'Type': bType
    }
    bookObj.push(myObj);
    localStorage.setItem('bookDetail',JSON.stringify(bookObj));
    display.update();

}
Display.prototype.update = function(){
    let bookDetail = localStorage.getItem('bookDetail');
    if(bookDetail == null){
        bookObj = [];
    }
    else{
        bookObj = JSON.parse(bookDetail);
    }
    let tableBody = document.getElementById('tableBody');
    let html = "";
    bookObj.forEach((element,index) => {
        html += `
        <tr>
                                    
        <td>${element.Name}</td>
        <td>${element.Author}</td>
        <td>${element.Type}</td>
        <td><button class="btn btn-primary" id="${index}"  >Delete</button></td>
        </tr>`;
        
    });
    tableBody.innerHTML = html;
    
}




//Add event listeners to 


let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit',libraryFormSubmit);
let display = new Display();
function libraryFormSubmit(e){
    e.preventDefault();
    console.log('you have submitted Library form');
    let name =document.getElementById('bookname').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    
    let type;
    if(fiction.checked){
   type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }
    let book = new Book(name,author,type);
    console.log(book);

    
    
    display.validate(book);
    if(display.validate(book)){
    // display.add(book);
    display.update();
    display.clear();
    display.show('success', 'Your book has been successfully added');
    display.addToStorage(book);

    }
    else{
        display.show('danger', 'Sorry your book cannot be added');
    }

}

display.update();


