// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/
function convertToString(number){
  return(string(number));
}
let ans=convertToString(12);

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/


// - Write a Function Declaration
function addOne(number){
  return(number+=1);
}
// - Write a Function Expression
let addedNumber=function(number){
  return(number+=1);
};
// - Write an Arrow Function without curly brackets(if possible)
let addedNumber=(number)=>number+=1;
// - Write an Arrow Function with curly brackets
let addedNumber=(number)=>{
  return(number+=1);
}
// - Execute the function
addedNumber(24);
// - Execute the function and store the return value in a variable.
let answer=addedNumber(25);
// - What is the typeof returnValue
typeof(answer);// "26"
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(number){
  return(number-=1);
}

// - Write a Function Expression
let subtractednumber=function(number){
  return(number-=1);
};
// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
let subtractednumber=(number)=>number-=1;
// - Execute the function
subtractednumber(26);
// - Execute the function and store the return value in a variable.
let answer=subtractednumber(26);
// - What is the typeof returnValue
The typeof returned value is string.
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1,num2){
  return(sum1+sum2);
}
// - Write a Function Expression
let sumof=function(num1,num2){
  return(sum1+sum2);
}
// - Write an Arrow Function without curly brackets(if possible)
let sumof=(num1,num2) => sum1+sum2;
// - Write an Arrow Function with curly brackets
let sumof=(num1,num2)=>{
  return(sum1+sum2);
}
// - Execute the function
sumof(12,12);
// - Execute the function and store the return value in a variable
let answer1=sumof(12,12);
// - What is the typeof returnValue
typeof always returns string value so the sum will be converted to string like "24".
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(number){
  return(number*number);
}
// - Write a Function Expression
let squarevariable=function(number){
  return(number*number);
}
// - Write an Arrow Function without curly brackets(if possible)
let squarevariable=(number)=>(number*number);

// - Write an Arrow Function with curly brackets
let squarevariable=(number)=>{
  return(number*number);
}
// - Execute the function
squarevariable(2);
// - Execute the function and store the return value in a variable
let square_answer=squarevariable(2);
// - What is the typeof returnValue
the typeof return value will be string as it returns string value ="4".
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return(true);
  }
  else {
    return(false);
  }
}
// - Write a Function Expression
let greater_expression=function isGreater(x,y){
  if(x>y){
    return(true);
  }
  else {
    return(false);
  }
}
// - Write an Arrow Function without curly brackets(if possible)
let greater_expression=(x,y)=>(x>y)?"true":"false";

// - Write an Arrow Function with curly brackets
let greater_expression=(x,y)=>{
  if(x>y){
    return(true);
  }
  else {
    return(false);
  }
}
// - Execute the function
greater_expression(3,6);
// - Execute the function and store the return value in a variable
let ans_expression=greater_expression(3,6);
// - What is the typeof returnValue
//typeOf booleantype true will be string astypeof returns string.
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if(number%2===0){
    return("number is even")
  }
  else{
    return("no is odd");
  }
}
// - Write an anonymous Function Expression
let oddeven_variable=function(number){
  if(number%2===0){
    return("number is even")
  }
  else{
    return("no is odd");
  }
}
// - Write an named Function Expression
let oddeven_variable=function oddOrEven(number){
  if(number%2===0){
    return("number is even")
  }
  else{
    return("no is odd");
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
 oddeven_variable=(number)=>number%2===0 ?"number is even": "no is odd";
  
  

// - Write an Arrow Function with curly brackets
let oddeven_variable=(number)=>{
  if(number%2===0){
    return("number is even")
  }
  else{
    return("no is odd");
  }
};
// - Execute the function
oddeven_variable(32);
// - Execute the function and store the return value in a variable
let return_oddenen=oddeven_variable(32);
// - What is the typeof returnValue
//string