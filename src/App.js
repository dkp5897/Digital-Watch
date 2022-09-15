import { useState } from "react";
import "./index.css";

export default function App() {
  let time = new Date().toLocaleTimeString();
  //using hook
  const [curTime, updatedTime] = useState(time);

  function UpdateTime() {
    time = new Date().toLocaleTimeString();
    updatedTime(time);
  }

  setInterval(UpdateTime, 1000);

  return (
    <div className="App">
      <h1>Digital Watch</h1>
      <h1 className="watch">{curTime}</h1>
    </div>
  );
}
