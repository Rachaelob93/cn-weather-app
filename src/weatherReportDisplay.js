import React from "react";

// this is where we will display all of the individual components from the weather Api

function Display({weatherReport}){
    let weatherMain = weatherReport.weather[0].main;
    let weatherDescription = weatherReport.weather[0].description;
    let temp = weatherReport.main.temp;
    let humidity = weatherReport.main.humidity;
    let city = weatherReport.name;
    let country = weatherReport.sys.country;
    let icon = weatherReport.icon;


return (
    <div>
        <p>${weatherMain.data}</p>
        <p>${weatherDescription.data}</p>
        <p>${temp.data}</p>
        <p>${humidity.data}</p>
        <p>${city.data}</p>
        <p>${country.data}</p>
        <p>${icon.data}</p>
    </div>

)
};
export default Display; 
// export weatherReport? define as function?