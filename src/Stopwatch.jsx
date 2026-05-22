import start from "./assets/start.png";
import pause from "./assets/pause.png";
import stop from "./assets/stop.png";
import { useEffect, useState } from "react";
import stopwatch from "./assets/stopwatch.png"

function Stopwatch() {
  const [startTimer, setStartTimer] = useState(false);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!startTimer) return;

    const interval = setInterval(() => {
      seconds === 59
        ? (setSeconds(0),
          minutes === 59
            ? (setMinutes(0), setHour((prev) => prev + 1))
            : setMinutes((prev) => prev + 1))
        : setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTimer, seconds, minutes]);
  return (
    <div className="flex justify-center items-center flex-col mt-10 gap-20">
      <div className="flex ">
        <div onClick={() => setStartTimer(!startTimer)}>
          {!startTimer ? (
            <img src={start} alt="start" className="cursor-pointer" />
          ) : (
            <img src={pause} alt="pause" className="cursor-pointer" />
          )}
        </div>
        {startTimer === true ? <img src={stop} alt="stop" /> : ""}
      </div>
<div>
    <img src={stopwatch} alt="stopwatch" />
</div>
      <div className="flex gap-15 text-white font-semibold text-3xl">
        <div>
          <div>{hour < 10 ? hour.toString().padStart(2, "0") : hour}</div>
          <div className="text-red-500">Hrs</div>
        </div>
        <div>
          <div>
            {minutes < 10 ? minutes.toString().padStart(2, "0") : minutes}
          </div>
          <div className="text-yellow-500">Min</div>
        </div>
        <div>
          <div>
            {seconds < 10 ? seconds.toString().padStart(2, "0") : seconds}
          </div>
          <div className="text-green-500">Sec</div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
