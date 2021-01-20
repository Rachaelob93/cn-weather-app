import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import "../App.css";


const Heading = () => {
    return  <div className="headingDiv">
        <h1 className="heading1">The weather in your chosen location is:</h1>
    </div>
    
}


export default Heading;