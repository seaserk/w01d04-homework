console.log('working');

//What is the difference between a parameter and an argument?
// ANSWER - Parameters are variables listed as a part of the function definition.
// Arguments are values passed to the function when it is invoked.

//Within a function, what is the difference between return and console.log?
// In a function, a return will not print the outcome of the function when called.  A function stops at the return.
// A console log will print the output and is used more in a debugging scenario.

//What are the implications of the ability of a function to return a value?
//A return statement determines the value the function returns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. 
//A return keyword without an expression after it will cause the function to return undefined .

//Write a function checkPalindrome that accepts a single argument, a string. 
//The function should return true if the string is a palindrome, false if not. 
//Make sure your function will give the correct answer for words with capital letters.

function checkPalindrome(str) {
 console.log ('TRUE');
}
checkPalindrome("Radar");

function checkPalindrome(str) {
  console.log ('FALSE');
 }
 checkPalindrome ("Borscht");


//Write a function sumDigits that accepts a number and returns the sum of its digits.

function sumDigits (num) {
		sumDigits (525)
	}



function sumDigits(num) {
	const negative = false;
	const sum = 0;
  num.toString().split('').forEach(function(digit) {
  	
  	if (digit === "-") {
  		negative = true;
  	} else {
  	  if (negative) {
  		  sum -= Number(digit);
  		  negative = false;
  	  } else {
  		  sum += Number(digit);
  	  }
  	}
  	
 });
  
  return sum;

	console.log (sumDigits (42));

//Write a function calculateSide that takes two arguments: sideA and sideB, 
//and returns the solution for sideC using the Pythagorean theorem.

function calculateSide(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(pythagorean(4, 3));

// //OR

function pythagorean_theorem(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
return false; 
		return Math.sqrt(x * x + y * y);
	}

console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));

//Write a function sumArray that takes an array as an argument. The array should contain numbers.
// The function should return the sum of the numbers in the array. Do not use .reduce().
const numbers = [10, 20, 30, 40] // sums to 100
for (const i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

//Write a function called checkPrime that will test whether a number is Prime. 
//The function will return true (Boolean) if Prime, false if not. 
//Hint: Check every number up to the square root. To do this, try a for loop.

function checkPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(const x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(checkPrime(2));

//Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit.
function printPrimes(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( printPrimes(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); 
}

display(100);

