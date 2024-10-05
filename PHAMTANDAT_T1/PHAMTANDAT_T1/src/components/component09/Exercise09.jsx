import React from "react";

function Exercise9() {

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }


  const fahrenheitValues = [32, 50, 68, 86, 104];
  const celsiusValues = fahrenheitValues.map(fahrenheit => fahrenheitToCelsius(fahrenheit));

  return (
    <div>
      <h1>9. Create a function that will convert from Fahrenheit to Celsius</h1>
      <h2>
        {fahrenheitValues.map((fahrenheit, index) => (
          <div key={index}>
            {fahrenheit}°F = {celsiusValues[index].toFixed(2)}°C
          </div>
        ))}
      </h2>
    </div>
  );
}

export default Exercise9;
