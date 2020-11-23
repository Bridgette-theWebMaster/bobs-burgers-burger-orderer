import React, { useEffect, useState } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          return () => {
            clearTimeout(timeout);
          };
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("minutes", minutes);
  }, [seconds, minutes]);

  useEffect(() => {
    const second = Number(localStorage.getItem("seconds"));
    const minute = Number(localStorage.getItem("minutes"));
    setSeconds(second);
    setMinutes(minute);
  }, []);

  return (
    <>
      {minutes === 0 && seconds === 0 ? (
        <strong>Order Ready</strong>
      ) : (
        <strong>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </strong>
      )}
    </>
  );
}
