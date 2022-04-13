console.log('welcome to cv screener app');
let next = document.getElementById('next');
next.addEventListener('click',nextCv);
let data = [
    {
        name: 'Ali',
        age: 18,
        language: 'C++',
        city: 'Islamabad',
        image:'https://randomuser.me/api/portraits/men/61.jpg'
    },
    {
        name: 'Ahmed',
        age: 28,
        language: 'Java',
        city: 'Lahore',
        image:'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: 'Zara',
        age: 23,
        language: 'JavaScript',
        city: 'Rawalpindi',
        image:'https://randomuser.me/api/portraits/women/68.jpg'
    }, 
    {
        name: 'Urooj',
        age: 24,
        language: 'Python',
        city: 'Murree',
        image:'https://randomuser.me/api/portraits/women/25.jpg'
    }

];

function cvIterator(values){
    let nextIndex = 0;
    return {
        next:function(){
            if(nextIndex<values.length){
                return{
                    value: values[nextIndex++],
                    done: false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }

}

const persons = cvIterator(data);

function nextCv(){

   const nextPerson = persons.next().value;
   if(nextPerson != undefined){
    
let img = document.getElementById('img');
let profile = document.getElementById('profile');

img.innerHTML = `
<img src=${nextPerson.image}>

`;
profile.innerHTML =  ` 
<p>${nextPerson.name}</p>
<hr>
<p>${nextPerson.age}</p>
<hr>
<p>${nextPerson.language}</p>
<hr>
<p>${nextPerson.city}</p>
<hr>

`;

   }
   else{
       alert('end of cvs');
       window.location.reload();
   }
}
nextCv();