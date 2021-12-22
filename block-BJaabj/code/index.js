/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/
function sayHello() {
alert("Hello World!");
}
sayHello();
/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
function fullName() {
  var firstName=prompt("Enter your first name");
  var lastName=prompt("Enter your last name");
  var fullName=firstName+lastName;
  alert(fullName);

}
fullName();

/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
function addTwoNumbers()
{
  var firstNum=+prompt("Enter the first number");
  var secondNum=+prompt("Enter the second number");
  var sum=firstNum+secondNum;
  alert(sum);

}
addTwoNumbers();
/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
function getTable(){
  var num=+prompt("enter a number");
  // var firstNum=prompt("Enter the first number");
  
 
 
  alert(`${num*1},${num*2},${num*3},${num*4},${num*5},${num*6},${num*7},${num*8},${num*9},${num*10}`);
}
getTable();
/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
function isLeapYear() {
  var year=+prompt("enter a yaer");
  if(year%4===0)
  {
    else if(year%100===0)
    {
   else if(year%400===0)
      {
        alert("its a leap year");
      }
    }
    alert("leap year");
  }
  else {
    alert("not leap year");
  }
}
isLeapYear();
/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/
function getFactorial()
{
  var number=+prompt("Enter a number");
  let final=1;
  for (let i=number;number>1;i--)
  {
    final *= i;
  }
  alert(`the factorial of ${number} is ${final}`)
}
getFactorial();
