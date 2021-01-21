import React from "react";
import "./weatherAPI.css"; 

const API_KEY = process.env.REACT_APP_API_KEY
const UNITS = "Metric"
const LANG = "en"

class WeatherAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            weatherReport : null,
            isLoading: true,
            error : null
        }
    };
   componentDidUpdate(){
       let URL = /*api url*/ +this.props.city +"&lang=" + LANG + "&appid=" + API_KEY + "&units="+ UNITS;
       fetch(URL).then(response =>{
           if(response.ok) {return response.json()}
           else {throw new Error("Something went wrong")}}) /*error?*/
            .then(data => this.setState(
                { weatherReport : data,
                isLoading: false}))
            .catch(error => this.setState( {error, isLoading : true }));
   } 
   render () {
       if(this.state.isLoading) {
        if(this.props.city !=null) {
            return (
                <div>
                    {/* input to be commited */}
                </div>
            )
        }
        else return null;
       }
    else {
        return(
            <Display weatherReport = {this.state.weatherREport}/>
        )
    }
   }
};

export default WeatherAPI;