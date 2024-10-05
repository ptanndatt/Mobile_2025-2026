import React from "react";

function Exercise10() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div>
      <h1>10. Calculate the sum of numbers in an array of numbers</h1>
      <h2>Array: {numbers.join(', ')}</h2>
      <h2>Sum: {sum}</h2>
    </div>
  );
}

export default Exercise10;
