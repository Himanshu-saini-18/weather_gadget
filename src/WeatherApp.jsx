import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({
        city :"Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
         <div className="border-4" style={{textAlign:"center"}}>
            <span className="font-bold text-gray-700 ">{weatherInfo.city}</span>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
         </div>
    )
}