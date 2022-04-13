console.log("hello World");
if(window.history.replaceState){
    window.history.replaceState(null,null,window.location.href);
}

let alert = document.getElementById('alert');

setTimeout(() => {
    alert.style.display = "none";
}, 3000);
let show = document.getElementById('show');
show.addEventListener('click',()=>{
    location.replace('/show');
})
