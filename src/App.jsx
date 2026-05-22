import { useState } from "react";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

function App() {
  const [toggle, setToggle] = useState("Stopwatch");

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <div className=" flex justify-center">
        <div className="w-60 h-12 bg-white flex p-1 rounded-xl mt-20">
          <div
            onClick={() => setToggle("Stopwatch")}
            className={`flex-1 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 ${
              toggle === "Stopwatch"
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            Stopwatch
          </div>

          <div
            onClick={() => setToggle("Timer")}
            className={`flex-1 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 ${
              toggle === "Timer"
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            Timer
          </div>
        </div>
      </div>

      <div >
        <div>{toggle === "Stopwatch" ? <Stopwatch /> : <Timer />}</div>
      </div>
    </div>
  );
}

export default App;
