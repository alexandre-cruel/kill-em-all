var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Httpcity = new XMLHttpRequest();
const httphero = new XMLHttpRequest();
const urlcity='http://localhost:3000/city';
const urlhero='http://localhost:3000/superhero';
var city;
var hero;

Httpcity.open("POST", urlcity);
Httpcity.send();
Httpcity.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200) {
        city = Httpcity.responseText
    }};


httphero.open("POST", urlhero);
httphero.send();
httphero.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200) {
        hero = httphero.responseText
        console.log("The hero "+ hero + " is in " + city)
    }};
