function sayHi (){
    console.log("hellow world");
}

sayHi();
//as an anornymous function
myFunc = function(){
    console.log("Function Expression")
}

myFunc();

function callFunction(fun){
    fun();
}
callFunction(myFunc);