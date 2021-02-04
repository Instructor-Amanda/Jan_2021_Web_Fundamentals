// every loop has three components
// a starting point
// a stopping point
// a way to move from start to stop (increment or decrement)
//increment up one w/ ++, decrement w/ --

//for loops

// for(var value = 0; value <= 10; value++){
//     // starting,   stopping,   increment
//     //if the stop point has not been reached, run whatever code is in the loop
//     console.log(value);
// }
// 4 step process
    //1) check the current starting point
    //2) check the end condition
    //3) if not ready to stop, run inside code
    //4) increment/decrement

var my_array = ["Erebos", 20, false, ["cat", "dog"], "coffee"];
//erebos -> my_array[0]
//20 -> my_array[1]


// for(var i = 0; i < my_array.length; i++){
//     console.log(my_array[i]);
// }

// while loops
// var value = 0; //start
// while(value <= 10){ //stop
//     console.log(value);
//     value++; //increment
// }
// var i = 0;
// while(i < my_array.length){
//     console.log(my_array[i]);
//     i++;
// }

// var check = false;
// var x = 1;
// while(check === false){
//     console.log(x);
//     x++;
//     if(x%5 === 0){
//         check = true;
//     }
// }

// function

function say_hello(){
    console.log("Hello User from the code in the function");
    return "Hello User! from the return line";
}

// say_hello();

var x = say_hello(); //stores the result (the return statement) of the function as a variable
//console.log(x);
x = x+", nice to see you!";
//console.log(x);

function isThisGreater(value){
    // the values in the parenthesis of the function definition are called parameters
    if(value > 3){
        return value+" is greater than 3";
    }
    else{
        return value+" is not greater than 3";
    }
}

var result = isThisGreater(-5);
//the values that are utilized by the parameters are called "arguments"
//console.log(result);

function introduction(my_name = "User", location = "Unknown"){
    say_hello();
    console.log("And I like it here");
    return "Hi my name is "+my_name+", and I live in "+location;
    
}

var intro = introduction("Roy");
console.log(intro);

