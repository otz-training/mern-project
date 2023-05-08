import { useState, useEffect, useRef } from "react";

function TestRef() {
  const [inputValue, setInputValue] = useState("ABC");
  
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  
  });
  console.log(inputValue);
  console.log(typeof count);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      
    </>
  );
}

export default TestRef;