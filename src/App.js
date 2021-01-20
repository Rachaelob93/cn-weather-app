import React, {useState, useEffect} from "react";
import './App.css';
import LocationSearch from "./components/LocationSearch";
import Heading from "./components/Heading";
// import WeatherAPI from "./WeatherAPI";


class App extends React.Component {

  // const [city, setCity] = React.useState(null);


  render() {
    return (
      <div>
        {/* <TextField autoFocus label="City Name" 
          onChange={(e)=> {setCity(e.target.value); }}
        />
          <WeatherAPI city={city} /> */}
          <LocationSearch />
          <Heading />
         
      </div>
    )
  }
}

export default App;