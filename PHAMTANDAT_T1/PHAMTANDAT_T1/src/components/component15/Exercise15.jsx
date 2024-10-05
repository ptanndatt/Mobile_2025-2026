import React from "react";

function Exercise15() {
  
  const findFibonacci = (n) => {
    if (n <= 1) {
      return n; 
    }
    return findFibonacci(n - 1) + findFibonacci(n - 2); 
  };


  const nthFibonacci = findFibonacci(10);

  return (
    <div>
      <h1>15. Create a function that will find the nth Fibonacci number using recursion</h1>
      <h2>10th Fibonacci Number: {nthFibonacci}</h2>
    </div>
  );
}

export default Exercise15;
