import React from "react";

function Exercise2() {
   
    const oddNumbers = [];
    for (let i = 1; i < 100; i += 2) {
        oddNumbers.push(i);
    }

    return (
    <div>
        <h1>2. Print the odd numbers less than 100  </h1>
         <h2>
                 {
                    oddNumbers.join(', ')
                 }
        </h2>
    </div>
    )
}
export default Exercise2