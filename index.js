// console.log("mehul kanzariya")



// function add(a,b){
//     sum=a+b;
// }


// 1.even odd
// const n = 5
// if(n%2)
// {
//     console.log("Odd Number")
// }else
// {
//     console.log("Even Number")
// }

// 3.Leap Year
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   const year = 2020;
//   console.log(`${year} is ${isLeapYear(year) ? '' : 'not '}a leap year.`);
  


// 4.sum of natural number
//   function sumOfNaturalNumbers(n) {
//     if (n < 1) {
//       return 0; 
//     }
//     return (n * (n + 1)) / 2;
//   }
  
//   const n = 5;
//   console.log(`The sum of the first ${n} natural numbers is: ${sumOfNaturalNumbers(n)}`);


// 5.factorial of a numbers
  function factorial(n) {
    if (n < 0) 
    return undefined; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const num = 4;
  console.log(`Factorial of ${num} is: ${factorial(num)}`);
  
  