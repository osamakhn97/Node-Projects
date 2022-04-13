console.log('This is Namaz Time');


let tableBody = document.getElementById('tableBody');

function fetchNamaz(){
    let year = document.getElementById('year');
let month = document.getElementById('month');
    let url = `https://api.aladhan.com/v1/calendar?latitude=33.5651&longitude=73.0169&method=2&month=${month.value}&year=${year.value}`;
    fetch(url).then(response=>{return response.json()}).
    then(obj=>{
    let arr = obj.data;
    let str = "";
    arr.forEach(element => {
        
        str += `<table>
         <tr><th>Date:</th><td>${element.date.readable}</td></tr>
        <tr><th>Fajar:</th><td>${element.timings.Fajr}</td></tr>
        <tr><th>Duhar:</th><td>${element.timings.Dhuhr}</td></tr>
        <tr><th>Asar:</th><td>${element.timings.Asr}</td></tr>
        <tr><th>Maghrib:</th><td>${element.timings.Maghrib}</td></tr>
        <tr><th>Isha:</th><td>${element.timings.Isha}</td></tr>
        </table>
        <hr>`;
        tableBody.innerHTML = str;

        
    });
    
    
    
    
    
    });
}
let btn =document.getElementById('go').addEventListener('click',fetchNamaz);