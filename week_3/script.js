console.log("Hello World");

var x = 5;
// var = declaration of a variable
// name_of_variable (use smart naming convention)
// = -> "setting" the variable
// value for the variable
var my_car = "Elantra";
var my_name = "Amanda";
var is_brunette = true;
x = 10;

// datatype for x is integer or number
// datatype for my_car and my_name = string
// datatype for is_brunette = boolean (true or false)

// get vs set
// get = get the value for something
// set = assignment, giving the variable a value

var my_array = ["Erebos", 20, false, ["cat", "dog"], "coffee"];
// arrays are special because they have index values or position values
// the index value counter starts at 0
// the last position in an array will always be 1 fewer than the length
my_array.push("Car");
my_array.push("airplane");
my_array.push("fish");
// array.push adds to the end of the array.
my_array.pop();
// pop removes the last element in an array



console.log(x);
console.log(x+5)
console.log(my_name);
console.log(is_brunette);
console.log(my_array);
console.log(my_array[2]);
// I can "get" the value at a certain index value by putting the index after the array
my_array[2] = true; //this "sets" or updates an existing element in an array.
console.log(my_array);

var my_object = {"key":"value", "instructor":"Amanda", "TA":"Bill"};
// hold "key-value" pairs in between curly braces
// similar to a dictionary
// objects do NOT have index values

console.log(my_object);
console.log(my_object["key"]);
console.log(my_object["instructor"]);
//my_object["name of key"] gives the value
my_object["key"] = 101; //set or updated the value for a given key in my_object
my_object["new_key"] = "new_value"; //add a key-value pair
console.log(my_object);
console.log(my_name+my_car); //addition operator "concatenates" strings (pushes them together)
console.log(x+my_car); //addition operator can concatenate strings and numbers (treats the number as a string)

console.log(20/4); //this gives me 5
console.log(20%4); //this gives me 0 -> the remainder after the division

console.log(20 >= 35);

//while one = "sets" values, == or === compare equality -> the difference is how strict the comparison is
console.log((5+10) == (12+3));
console.log((5+10) === (12+3));
// these have the same answer

console.log(5 == "5");
console.log(5 === "5");
// these are different

//not equal to -> replace one equal sign with the ! symbol)
console.log(5 != "5");
console.log(5 !== "5");

//Conditionals check whether a condition is met

if(my_object["key"] < 50){
    console.log("my condition is satisfied");
    // multiple conditions: and -> &&, or -> ||
}
else if(my_object["instructor"] != "Amanda"){
    console.log("the second condition was satisfied but the first was not");
}
else{
    console.log("none of the given coditions were satisfied, do something else");
}
// when a condition is NOT satisfied, the code inside the curly braces will not run;

if(x === 5){
    console.log(x*10);
}

