// import React, { useState } from "react";

// function Exercise21() {
//   const [array, setArray] = useState([1, 2, 3, 4, 5]);
//   const [rotatedArray, setRotatedArray] = useState([]);

//   const rotateArrayRight = (arr) => {
//     if (arr.length === 0) return arr; // Handle empty array
//     const lastElement = arr.pop(); // Remove last element
//     return [lastElement, ...arr]; // Insert last element at the start
//   };

//   const handleRotate = () => {
//     setRotatedArray(rotateArrayRight([...array])); // Rotate and update the state
//   };

//   return (
//     <div>
//       <h1>21. Rotate an array to the right 1 position</h1>
//       <div>
//         <p>Original Array: [{array.join(", ")}]</p>
//         <button onClick={handleRotate}>Rotate Right</button>
//         {rotatedArray.length > 0 && (
//           <p>Rotated Array: [{rotatedArray.join(", ")}]</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Exercise21;
