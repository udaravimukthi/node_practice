console.log('hi');

setTimeout(function(){
    console.log('after 3 seconds printed');
},3000); //milisecods

//as a loop

// setInterval(function(){
//     console.log('Hello udara');
// },4000);

//loop with time limitation
var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log('Hi vim');
if(time > 5){
    clearInterval(timer);
}
},2000);

console.log(__dirname);
console.log(__filename);

//models and require (accees another js file from app,js)

myModule = require('./counter.js');
console.log(counter([]))