
//normal function
function print(name){
    console.log(`my name is ${name}`);
}

print("Mohit");

// Function expression

var greet = function(name){
    console.log(`hi there ${name}`);
}

greet("Mohit");


// arrow function

var arrow = (name) => {
    console.log(`your name is ${name}`);
}


arrow("Mohit");


//callback

var newFunc = (name, callBack) =>{
    console.log(`name is ${name}`);
    callBack();
}

function printName(){
    console.log("My name is baba");
}

newFunc("Mohit",printName);

