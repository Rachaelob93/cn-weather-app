import React from "react";



const Card = ({ main, wind, sys}) => {
    const formatTime = (time) => {
        // Ben took this time solution from stack overflow
        let unix_timestamp = time
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        let seconds = "0" + date.getSeconds();
    
        // Will display time in 10:30:23 format
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
        return formattedTime
    }
    
    

    return (
        <div className="card">
            <p>Temp: {main.temp}</p>
            <p>Feels like: {main.feels_like}</p>
            <p>Wind speed: {wind.speed}</p>

            <p>Sunrise at: {formatTime(sys.sunrise)}</p>
         </div>

    )
}

export default Card;

