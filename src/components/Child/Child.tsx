import { memo } from "react";

interface Props {
  onTestClick: () => void;
}

export const Child = memo(({ onTestClick }: Props) => {
  console.log("child rendered");
  return <button onClick={onTestClick}>CLICK!!!</button>;
});
