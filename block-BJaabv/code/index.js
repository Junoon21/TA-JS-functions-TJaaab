// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age,_conversionrate=7) {
  // Your code goes here
  let pupage=age*7;
  
  return(pupage);
}
calculateDogAge(3,5);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/
const _constant=64;
function calculateMoviesToWatch(age,_number) {
  // Your code goes here
    const Maxage=80;
    let _totalmovies=(Maxage-age)*_number*12*4;//*4 cause its per month calculation
return (_totalmovies);

}
calculateMoviesToWatch(21,4)
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(_celsius) {
  // Your code goes here
  f_temp=(9/5*_celsius)+32;
  return(f_temp);
}
celsiusToFahrenheit(34);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(_fahrenheit) {
  // Your code goes here
  c_temp=5/9(_fahrenheit-32);
  return(c_temp);
}
fahrenheitToCelcius(54);
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  if(n<0){
    alert("The number below 1 is not allowed");
  }
  // Your code goes here
for(let i=1;i<=n;i++)
{
let _return =_return *x;
}
return(_return//x**n);
}
pow(2,4);
// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(_n,_string) {
  if(_string==="sum"){
    for(let i=0;_n>i;i++){
      var sum=sum+i;
    }
    return(sum);
  } 
  else if (_string==="product"){
    for(let i=1;_n>=i;i++){
      var _product=_product*i;
    }
    return(_product);
  }
  else (alert("`Not a valid Input"));
  // Your code goes here
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  for(let i=0;i<n;i++){
    var _sum=_sum+i;
  }
  return(_sum);
  // Your code goes here
}
sumOfN(24);
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
function sumOfN(n) {
  for(let i=0;i<n;i++){
    if(i%5===0 || i%7===0){
      var _sum=_sum+i;
    }  
  }
  return(_sum);
  // Your code goes here
}
sumOfN(24);

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,b) {
  // Your code goes here
  if(a>b){
    return(b);
  }
  else if (b>a){
    return(a);
  }
  else(alert("both are equal"));
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(_input) {
  // Your code goes here
  return(typeof(_input));
// return("number type");
  // }
  // else if (typeof(_input)==="string"){
  //   return("number type");
  // }
  // else if (typeof(_input)==="boolean"){
  //   return("boolean type");
  // }
  // else if (typeof(_input)==="null"){
  //   return("boolean type");
  // }
  // else if (typeof(_input)==="undefined"){
  //   return("boolean type");
  // }
  // else {
  //   return("object type");
  // }
}
typeCheck("hey");
