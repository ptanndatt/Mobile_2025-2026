import React from "react";

function Exercise8() {

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }


  const celsiusValues = [0, 10, 20, 30, 40];
  const fahrenheitValues = celsiusValues.map(celsius => celsiusToFahrenheit(celsius));

  return (
    <div>
      <h1>8. Create a function that will convert from Celsius to Fahrenheit</h1>
      <h2>
        {celsiusValues.map((celsius, index) => (
          <div key={index}>
            {celsius}°C = {fahrenheitValues[index]}°F
          </div>
        ))}
      </h2>
    </div>
  );
}

export default Exercise8;
