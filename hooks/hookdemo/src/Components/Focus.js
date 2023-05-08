import { useRef } from "react";


function Focus() {
  const inputElement = useRef();
  const inputElement1 = useRef();
  const focusInput = () => {
    inputElement.current.focus();
    inputElement1.current.focus();
  };

  return (
    <>
       <textarea ref={inputElement1}></textarea>
      
       <input type="text" ref={inputElement} />
       <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default Focus;