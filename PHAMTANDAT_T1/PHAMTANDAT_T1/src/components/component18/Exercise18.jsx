import React, { useState, useEffect } from "react";

function Exercise18() {
  const [primes, setPrimes] = useState([]);

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const generatePrimes = (count) => {
    const primeNumbers = [];
    let number = 2; // Start checking for prime numbers from 2
    while (primeNumbers.length < count) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
      number++;
    }
    return primeNumbers;
  };

  useEffect(() => {
    const first100Primes = generatePrimes(100);
    setPrimes(first100Primes);
  }, []); // Run only once on component mount

  return (
    <div>
      <h1>18. Print the first 100 prime numbers</h1>
      <ul>
        {primes.map((prime, index) => (
          <li key={index}>{prime}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise18;
