console.log('Welcome to notes app');
showNotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        'text':addTxt.value,
        'title':addTitle.value,
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);

    showNotes();

})
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
        <div class="cardA my-2 mx-2" style="width: 12rem;">
            
        <div class="card-body1">
          <h5 class="card-title"> ${element.title} </h5>
          <p class="card-text">${element.text}</p>
          <button class="btn btn-primary" id="${index}" onclick="removeItem(this.id)">Delete Note</button>
        </div>
      </div>`;
    });
    let elemNotes = document.getElementById('notes');
    if (elemNotes != null) {
        elemNotes.innerHTML = html;
    }
    else{
        elemNotes.innerHTML = `Nothing to show, please add some notes`;
    }
}

function removeItem(i){
    // console.log("I am deleting note "+i)
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(i,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener('input',function(e){
    let inputVal = search.value.toLowerCase();
    let inputVal1 = search.value.toUpperCase();
    let noteCard = document.getElementsByClassName('cardA');
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal) || cardTxt.includes(inputVal1) ){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
 

   })
})