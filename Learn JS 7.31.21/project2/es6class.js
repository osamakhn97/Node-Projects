class Book{
    constructor(name,author,type){
        this.name=name;
        this.author=author,
        this.type=type
        }
        
}
class Display{

    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book){
        if(book.name.length<2 || book.author.length<2){
            return false
        }
        else{
            return true
        }
    }
    show(type,messagew){
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


    addToStorage(book){
        let bName = book.name;
        let aName = book.author;
        let bType = book.type;
        let bookDetail = localStorage.getItem('bookDetail');
        let bookObj = [];
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

    update(){
        let bookDetail = localStorage.getItem('bookDetail');
        let bookObj;
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
            <td><button class="btn btn-primary" id="${index}" onclick = " rem(this.id)"
             >Delete</button></td>
            </tr>`;
           
        });
        
        tableBody.innerHTML = html;
        
    }

    
}
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



// let bookDetail = localStorage.getItem('bookDetail');
// let bookObj;
// if(bookDetail == null){
//     bookObj = [];
// }
// else{
//      bookObj = JSON.parse(bookDetail);
// }
// bookObj.forEach((element,index) =>{
    
//     let rem = document.getElementById(index);
    
//         display.remove(rem);
        
//        });
function rem(ind) {
    let bookDetail1 = localStorage.getItem('bookDetail');
    let bookObj1;
    if(bookDetail1 == null){
        bookObj1 = [];
    }
    else{
         bookObj1 = JSON.parse(bookDetail1);
    }
    bookObj1.splice(ind,1);
    localStorage.setItem('bookDetail',JSON.stringify(bookObj1));
    display.update();
    console.log(ind);
    
}