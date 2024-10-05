import React from "react";

function Exercise13() {
  // Define an array of numbers
  const numbers = [12, 45, 67, 89, 23, 56, 10];

  // Function to find the maximum number
  const findMaxNumber = (numbers) => {
    return Math.max(...numbers);
  };

  // Get the maximum number
  const maxNumber = findMaxNumber(numbers);

  return (
    <div>
      <h1>13. Find the maximum number in an array of numbers</h1>
      <h2>Array: {numbers.join(', ')}</h2>
      <h2>Maximum Number: {maxNumber}</h2>
    </div>
  );
}

export default Exercise13;
