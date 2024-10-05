import React from "react";

function Exercise14() {
  
  const generateFibonacci = (num) => {
    const fibonacci = [0, 1]; 
    for (let i = 2; i < num; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
  };

  
  const fibonacciNumbers = generateFibonacci(10);

  return (
    <div>
      <h1>14. Print the first 10 Fibonacci numbers without recursion</h1>
      <h2>Fibonacci Sequence: {fibonacciNumbers.join(', ')}</h2>
    </div>
  );
}

export default Exercise14;
