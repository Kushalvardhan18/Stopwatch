import start from "./assets/start.png";
import pause from "./assets/pause.png";
import stop from "./assets/stop.png";
import timer from "./assets/timer.png";
import { useEffect, useState } from "react";

function Timer() {
  const [startTimer, setStartTimer] = useState(false);

  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!startTimer) return;

    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else if (hour > 0) {
        setHour((prev) => prev - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        setStartTimer(false);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, startTimer, minutes, hour]);

  function startTimerFn() {
    if (seconds <= 0 && hour <= 0 && minutes <= 0) return;

    setStartTimer((prev) => !prev);
  }

  function stopTimer() {
    setHour(0);
    setMinutes(0);
    setSeconds(0);
    setStartTimer(false);
  }
  return (
    <div className="flex justify-center items-center flex-col mt-10 gap-20">
      <div className="flex items-center justify-center">
        <div onClick={startTimerFn}>
          {!startTimer || (seconds <= 0 && hour <= 0 && minutes <= 0) ? (
            <img
              src={start}
              alt="start"
              className={`${seconds <= 0 && hour <= 0 && minutes <= 0 ? "cursor-not-allowed" : "cursor-pointer hover:scale-105  transition-all duration-200"}` }
              title="Start Timer"
            />
          ) : (
            <img src={pause} alt="pause" className="cursor-pointer hover:scale-105  transition-all duration-200" title="Pause Timer"/>
          )}
        </div>
        {startTimer && seconds >= 0 && hour >= 0 && minutes >= 0 ? (
          <img src={stop} alt="stop" onClick={stopTimer} className="cursor-pointer hover:scale-105  transition-all duration-200" title="Stop Timer"/>
        
        ):""}
      </div>
      <div>
        <img src={timer} alt="timer" />
      </div>
      <div className="flex gap-15 text-white font-semibold text-3xl text-center">
        <div className="flex flex-col gap-5">
          <input
            type="number"
            name="hour"
            id="hour"
            min={0}
            max={24}
            placeholder="00"
            value={String(hour).padStart(2, "0")}
            onChange={(e) => {
              const value = Math.min(24, Math.max(0, Number(e.target.value)));
              setHour(value);
            }}
            inputMode="numeric"
            className="text-center"
          />

          <div>Hrs</div>
        </div>
        <div className="flex flex-col gap-5">
          <input
            type="number"
            name="min"
            id="min"
            min={0}
            max={60}
            placeholder="00"
            value={String(minutes).padStart(2, "0")}
            onChange={(e) => {
              const value = Math.min(59, Math.max(0, Number(e.target.value)));
              setMinutes(value);
            }}
            className="text-center"
          />
          <div>Min</div>
        </div>
        <div className="flex flex-col gap-5">
          <input
            type="number"
            name="sec"
            id="sec"
            min={0}
            max={60}
            placeholder="00"
            value={String(seconds).padStart(2, "0")}
            onChange={(e) => {
              const value = Math.min(59, Math.max(0, Number(e.target.value)));
              setSeconds(value);
            }}
            className="text-center"
          />
          <div>Sec</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
