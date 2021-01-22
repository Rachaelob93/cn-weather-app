import React, { useState } from "react";
import "../App.css"

const LocationSearch = ({func, inputFunc}) => {
    const [val, setVal] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        inputFunc(val)
        func()
    }

   return ( 
        <div className="searchElementDiv">
            <form onSubmit={handleSubmit}>
                    <input className="location-input" type="text" placeholder="Location" value={val} onChange={(e) => setVal(e.target.value)}/>
                    <button className="btn" type="submit">Check Weather</button>
            </form>
        </div>
    )
       
}
//  :)




export default LocationSearch;