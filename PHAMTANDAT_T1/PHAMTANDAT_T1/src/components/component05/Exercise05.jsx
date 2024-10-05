import React from "react";

function Exercise5() {
  const sum = Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h1>5. Calculate the sum of numbers from 1 to 10</h1>
      <h2>{sum}</h2>
    </div>
  );
}

export default Exercise5;
