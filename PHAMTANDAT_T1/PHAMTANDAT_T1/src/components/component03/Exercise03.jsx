import React from "react";

function Exercise3() {
    const number = [];
    for (let i = 1; i <= 10; i ++) {
        number.push(i*7);
    }
  return(
    <div>
         <h1>3. Print the multiplication table with 7 </h1>
         <h2>{number.join(', ')}</h2>   
    </div>
  )
}
export default Exercise3