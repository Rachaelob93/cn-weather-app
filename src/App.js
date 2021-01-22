import React, { useState } from "react";
import "./App.css";
import LocationSearch from "./components/LocationSearch";
import Heading from "./components/Heading";

import Card from "./components/Card";

const API_KEY = process.env.REACT_APP_API_KEY;
const UNITS = "Metric";

// 1. Set up your new Create react app. (DONE)
// 2. Render a ‘starter screen’, hello world or something, just get it on screen. (DONE - kinda)

// 3. Create a state value (hooks or state = {} w/ class component) and then render than (display it on the screen).
const App = () => {
  const [data, setData] = useState("data goes here"); // <-- good start ;)
  const [city, setCity] = useState("Manchester");

  const getWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${UNITS}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  // 5. Now try putting that data into the state from the function. 

  return (
    <>
      <div>
        <LocationSearch func={getWeather} inputFunc={setCity} />
        <Heading location={city} />
        {data.main && (
          <Card 
            main={data.main}
            wind={data.wind}
            sys={data.sys}
          />
        )}
      </div>
    </>
  );
};

// 6. Display the data correctly from the state
// 7. Set up an input and store it in a state value
// 8. Add the input to the api fetch string so the api now returns the correct weather for the input

export default App;
