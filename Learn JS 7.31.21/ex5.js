c1onsole.log('Welcome to JS Ex 5');



let search = document.getElementById('search');
search.addEventListener('input', searching);
let result = document.getElementById('results');
let word = document.getElementById('word');

function searching() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ex5.json', true);
    xhr.onload = function () {

        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            let str = "";
            let str1 ="";
            if (obj.word == search.value) {
                str1 += `<p>"${obj.word}"</p> `;
                word.innerHTML = str1;
                for (let i = 0; i < obj.results.length; i++) {
                    str += `
                   <p>${obj.results[i].definition}</p>
                   <hr>`;
                }
                result.innerHTML = str;

            }
           
            else {
                str = `<h3>No match found</h3>`;
                str1 = "";
                result.innerHTML = str;
                word.innerHTML = str1;
            }


        }
        else {
            console.log('error');

        }

    }
    xhr.send();


}