import { useEffect, useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="clock">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default Clock;
