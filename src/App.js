import { useState } from "react";
import "./App.css";

function App() {
  const [day, setDay] = useState("Monday");

  function changeDay(e) {
    setDay(e.target.value);
  }

  return (
    <div>
      <p>
        <select value={day} onChange={changeDay}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </p>
      <p> Selected day: {day}</p>
    </div>
  );
}

export default App;
