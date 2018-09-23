var x = 1;
//fetches from web server for chrome and stores in var
fetch("http://127.0.0.1:8887/server1/")
//converts from JSON string to JSON object
.then(response => response.json()).then(products => {

//sets empty var for HTML to be stored in
var cities = [];

//maps through products, sets var html to "arrivingFrom: VALUE<br/><br/>arrivalTime: VALUE"
var arrCities = products.map(function(city){

var html =  "<tr><td id=" + x++ + "><strong>Arriving From:</strong></td><td>" + city["name"] + "</td></tr> <tr><td>Arrival Time:</td><td>" + city["arrival_time"] + "</td></tr></td></tr> <tr><td>Status:</td><td>" + city["status"] + "</td></tr>" ;
//pushes var html into var citties, which is global scope
    cities.push(html);
});

//sets var p to result ID in HTML
var p = document.querySelector("#result")
//passes var citites into var p
p.innerHTML = cities;

})
