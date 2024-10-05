import React, { useState } from "react";

function Exercise19() {
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const [primes, setPrimes] = useState([]);

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const findPrimesGreaterThanN = (n, p) => {
    const primeNumbers = [];
    let number = n + 1; // Start checking from n + 1
    while (primeNumbers.length < p) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
      number++;
    }
    return primeNumbers;
  };

  const handleCalculatePrimes = () => {
    const result = findPrimesGreaterThanN(n, p);
    setPrimes(result);
  };

  return (
    <div>
      <h1>19. Create a function that will return in an array the first “p” prime numbers greater than “n”</h1>
      <div>
        <label>
          Enter a value for n: 
          <input
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <div>
        <label>
          Enter a value for p (number of primes): 
          <input
            type="number"
            value={p}
            onChange={(e) => setP(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <button onClick={handleCalculatePrimes}>Find Primes</button>
      {primes.length > 0 && (
        <div>
          <h3>The first {p} prime numbers greater than {n} are:</h3>
          <ul>
            {primes.map((prime, index) => (
              <li key={index}>{prime}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Exercise19;
