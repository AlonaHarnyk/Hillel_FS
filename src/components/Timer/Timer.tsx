import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Start");
      console.log(new Date());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("unmount");
      clearInterval(timerId);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
};
