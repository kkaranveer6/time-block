import { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);

  const [times, setTimes] = useState([
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ]);

  const [selected, setSelected] = useState([
    {
      day: "Monday",
      times: ["13:00", "14:00", "15:00"],
    },
    {
      day: "Tuesday",
      times: ["08:00"],
    },

    {
      day: "Wednesday",
      times: [],
    },

    {
      day: "Thursday",
      times: [],
    },

    {
      day: "Friday",
      times: [],
    },

    {
      day: "Saturday",
      times: [],
    },

    {
      day: "Sunday",
      times: [],
    },
  ]);

  const [colors, setColors] = useState(["red", "blue", "green", "yellow"]);
  const [selectedColor, setSelectedColor] = useState("red");

  const toggleSelectTime = (e, day, time) => {
    let newTimes = selected;
    newTimes.map((selectedTimes) => {
      if (selectedTimes.day == day) {
        let times = selectedTimes.times;
        if (times.includes(time)) {
          let index = times.indexOf(time);
          times.splice(index, 1);
          e.target.style.backgroundColor = "white";
        } else {
          times.push(time);
          e.target.style.backgroundColor = selectedColor;
        }
      }
    });

    setSelected(newTimes);
  };

  return (
    <div className="App">
      <div className="grid">
        {days.map((day, index) => (
          <div
            className={`days 
            `}
          >
            <h1>{day}</h1>
            <div className="times">
              {times.map((time) => (
                <section
                  className={`time ${
                    selected.map((selectedTime) =>
                      selectedTime.times.includes(time) ? "selected-time" : ""
                    )[index]
                  }
                  `}
                  onClick={(e) => toggleSelectTime(e, day, time)}
                >
                  {time}
                </section>
              ))}
            </div>
          </div>
        ))}
      </div>
      {colors.map((color) => (
        <div
          style={{ height: "1em", width: "1em", backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        ></div>
      ))}
      <button onClick={() => console.log(selected)}>click</button>
    </div>
  );
}

export default App;
