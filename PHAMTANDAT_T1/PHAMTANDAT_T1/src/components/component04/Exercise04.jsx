import React from "react";

function Exercise4() {
  const tables = [];

  for (let i = 1; i <= 10; i++) {
    const number = [];
    for (let j = 1; j <= 10; j++) {
      number.push(`${i} x ${j} = ${i * j}`);
    }
    tables.push(
      <div key={i}>
        <h3>Table for {i}</h3>
        <p>{number.join(', ')}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>4. Print all the multiplication tables with numbers from 1 to 10</h1>
      {tables}
    </div>
  );
}

export default Exercise4;
