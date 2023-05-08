import React, { useState , useEffect } from "react";
import './FavoriteColor.css';

function FavoriteColor() {
  const [count, setCount] = useState("0");
  const [color, setColor] = useState("red");
  

  useEffect(() => {
     alert("color Changed");
  });
  return (
    <>
      <h1 className={color}>My favorite color is {color}!</h1>
      <h1 className={color}>count = {count}</h1>
      <button
        type="button"
        onClick={() => setCount(5)}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

export default FavoriteColor ;