/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
  alert(`hello ${name}`)
}
sayHello("world");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName,lastName){
  return fullName=firstName+lastName;
}
let n1=getFullName("arya","stark");
alert(n1);
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum,secondNum){
  return sum=firstNum+secondNum;
}
alert(addTwoNumbers(300,400));
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA,numB,numC,operation){
  //can only be one of these `add, sub, mul, div`
if(isNaN(numA)=="true"){
  alert("invalid input");
}
else if(isNaN(numB)=="true"){
  alert("invalid input");
}else {
  switch(operation){
    case "add":var sum=numA+numB;
    break;
    case "sub":var sum=numA-numB;
    break;
    case "mul":var sum=numA*numB;
    break;
    case "div":var sum=numA/numB;
    break;
    default:alert("wrong input");
  }
}
return sum;
}
let anss=calc(30, 10, 'mul');

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(numdt)
{
  if(numdt%400==0)
  {
    alert("leap yr");
  }
  else if(numdt%100==0) {
    alert(" not leap yr");
  }
  else if(numdt%4==0) {
    alert("leap yr");
  }
  else  {
    alert(" not leap yr");
  }
}
isLeapYear(2000);

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(anumber){
  let last=1;
  for(let i=anumber;anumber>1;anumber--){
    last*=anumber;
  }
  return last;
}
getFactorial(4);
