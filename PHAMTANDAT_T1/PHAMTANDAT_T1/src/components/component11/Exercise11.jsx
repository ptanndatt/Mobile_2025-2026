import React from "react";

function Exercise11() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


  const average = sum / numbers.length;

  return (
    <div>
      <h1>11. Calculate the average of the numbers in an array of numbers</h1>
      <h2>Array: {numbers.join(', ')}</h2>
      <h2>Average: {average}</h2>
    </div>
  );
}

export default Exercise11;
