import { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState([
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ]);

  const times = [
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
  ];

  const defaultSlectedState = [
    {
      day: "monday",
      times: [],
    },
    {
      day: "tuesday",
      times: [],
    },

    {
      day: "wednesday",
      times: [],
    },

    {
      day: "thursday",
      times: [],
    },

    {
      day: "friday",
      times: [],
    },

    {
      day: "saturday",
      times: [],
    },

    {
      day: "sunday",
      times: [],
    },
  ];

  const [selected, setSelected] = useState(defaultSlectedState);

  const apiAddtime = ({ day, time }) => {
    fetch("http://localhost:3000/time", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        time: time,
        day: day,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const toggleSelectTime = (e, day, time) => {
    let newTimes = selected;
    e.target.classList.toggle("selected-time");
    console.log(`${day} ${time}`);

    newTimes.map((selectedTimes) => {
      if (selectedTimes.day == day) {
        let times = selectedTimes.times;
        if (times.includes(time)) {
          let index = times.indexOf(time);
          times.splice(index, 1);

          // e.target.style.backgroundColor = "white";
        } else {
          times.push(time);
          apiAddtime({ day: day, time: time });

          // e.target.style.backgroundColor = selectedColor;
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
            <hr />
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
    </div>
  );
}

export default App;
