import React from "react";

function Exercise7() {

  let sum = 0;
  for (let i = 12; i < 30; i += 2) { 
    sum += i;
  }

  return (
    <div>
      <h1>7. Calculate the sum of even numbers greater than 10 and less than 30</h1>
      <h2>{sum}</h2>
    </div>
  );
}

export default Exercise7;
