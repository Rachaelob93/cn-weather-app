import React from "react";
import "../App.css";


const Heading = ({location}) => {
    return  <div className="headingDiv">
        <h1 className="heading1">The weather in your chosen location is: {location}</h1>
    </div>
    
}


export default Heading;