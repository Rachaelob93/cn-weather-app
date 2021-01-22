import React from "react";
import "../App.css";


const Heading = ({location}) => {
    return  <div className="headingDiv">
        <h1 className="heading1">The weather in {location} </h1>
    </div>
    
}


export default Heading;