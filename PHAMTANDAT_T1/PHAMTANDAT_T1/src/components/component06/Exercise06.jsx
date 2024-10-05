import React from "react";

function Exercise6() {
  // Calculate 10!
  let factorial = 1;
  for (let i = 1; i <= 10; i++) {
    factorial *= i;
  }

  return (
    <div>
      <h1>6. Calculate 10!</h1>
      <h2>{factorial}</h2>
    </div>
  );
}

export default Exercise6;
