
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