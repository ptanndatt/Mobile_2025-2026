import React, { useState } from "react";

function Exercise16() {
  const [number, setNumber] = useState(0);
  const [isPrimeNumber, setIsPrimeNumber] = useState(null);

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheckPrime = () => {
    setIsPrimeNumber(isPrime(number));
  };

  return (
    <div>
      <h1>16. Create a function that will return a Boolean specifying if a number is prime</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={handleCheckPrime}>Check if Prime</button>
      {isPrimeNumber !== null && (
        <p>The number {number} is {isPrimeNumber ? "Prime" : "not Prime"}</p>
      )}
    </div>
  );
}

export default Exercise16;
