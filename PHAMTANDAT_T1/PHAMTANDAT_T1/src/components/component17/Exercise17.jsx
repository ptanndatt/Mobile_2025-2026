import React, { useState } from "react";

function Exercise17() {
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(null);

  const calculateSumOfDigits = (num) => {
    const digits = Math.abs(num).toString().split("");  // Split the number into digits
    return digits.reduce((acc, digit) => acc + parseInt(digit, 10), 0); // Sum up the digits
  };

  const handleCalculate = () => {
    setSum(calculateSumOfDigits(number));
  };

  return (
    <div>
      <h1>17. Calculate the sum of digits of a positive integer number</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={handleCalculate}>Calculate Sum of Digits</button>
      {sum !== null && <p>The sum of digits of {number} is {sum}</p>}
    </div>
  );
}

export default Exercise17;
