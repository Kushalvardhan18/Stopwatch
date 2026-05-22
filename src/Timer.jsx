import start from "./assets/start.png";
import pause from "./assets/pause.png";
import stop from "./assets/stop.png";
import timer from "./assets/timer.png";
import { useState } from "react";

function Timer() {
  const [startTimer, setStartTimer] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col mt-10 gap-20">
      <div className="flex ">
        <div onClick={() => setStartTimer(!startTimer)}>
          {!startTimer ? (
            <img src={start} alt="start" />
          ) : (
            <img src={pause} alt="pause" />
          )}
        </div>
        {startTimer === true ? <img src={stop} alt="stop" /> : ""}
      </div>
      <div>
        <img src={timer} alt="timer" />
      </div>
      <div className="flex gap-15 text-white font-semibold text-3xl">
        <div>
          <input
            type="number"
            name=""
            id=""
            min={0}
            max={24}
            placeholder="00"
          />

          <div>Hrs</div>
        </div>
        <div>
          <input
            type="number"
            name=""
            id=""
            min={0}
            max={60}
            placeholder="00"
          />
          <div>Min</div>
        </div>
        <div>
          <input
            type="number"
            name=""
            id=""
            min={0}
            max={60}
            placeholder="00"
          />
          <div>Sec</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
