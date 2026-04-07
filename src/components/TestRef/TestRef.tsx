import { useRef } from "react";

export const TestRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus on input</button>
    </>
  );
};

export const Counter = () => {
  const countRef = useRef(0);

  console.log("rendered");

  const handleClick = () => {
    countRef.current += 1;
    console.log("Clicks", countRef.current);
  };

  return <button onClick={handleClick}>Press me</button>;
};
