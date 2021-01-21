import React, {useState, useEffect} from "react";
import './App.css';
import LocationSearch from "./components/LocationSearch";
import Heading from "./components/Heading";
// import WeatherAPI from "./WeatherAPI";

// 1. Set up your new Create react app. (DONE)
// 2. Render a ‘starter screen’, hello world or something, just get it on screen. (DONE - kinda)

// 3. Create a state value (hooks or state = {} w/ class component) and then render than (display it on the screen). 
// 4. Fetch your api and console log it (try this in a function that you call on a button click - forget about useEffect/compDidMount for now)
// 5. Now try putting that data into the state from the function.
// 6. Display the data correctly from the state
// 7. Set up an input and store it in a state value
// 8. Add the input to the api fetch string so the api now returns the correct weather for the input


class App extends React.Component {


  render() {
    return (
      <div>
          <LocationSearch />
          <Heading />        
      </div>
    )
  }
}

export default App;