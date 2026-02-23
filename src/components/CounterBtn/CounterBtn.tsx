import { useState } from "react";

interface Props {
  handleClick: () => void;
}

export const CounterBtn = ({ handleClick }: Props) => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
      setCount(count + 1);
      handleClick()
  };

  return <button onClick={clickHandler}>Click: {count}</button>;
};
