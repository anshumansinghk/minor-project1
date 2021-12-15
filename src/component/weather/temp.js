import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import Weathercard from './weathercard.js'
import "./style3.css"
const Temp = () => {

        const [searchValue,setsearchValue]=useState("Satna")
        const [tempInfo,setTempInfo]=useState({})
        const getWeatherInfo= async ()=>{
            try{
                let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a5f4990e679a287a828702d7b967dd7e`
            
                const res=await fetch(url)
                const data=await res.json()
                const {temp,humidity,pressure}=data.main
                const {main:weathermood}=data.weather[0]
                const {name}=data
                const {country,sunset}=data.sys
                const {speed}=data.wind

                const myNewWeatherInfo={
                    temp,
                    humidity,
                    pressure,
                    weathermood,
                    name,
                    speed,
                    country,
                    sunset,
                }
                setTempInfo(myNewWeatherInfo)
            }
            catch(error){
                console.log(error);
            }
        }
        useEffect(()=>{
            getWeatherInfo();

        },[])
    return (
        <>
        <div className="wrap">
            <div className="search">
                <input
                    type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    value={searchValue}
                    onChange={(e)=>setsearchValue(e.target.value)}
                />
                <button className="searchButton" type="button" onClick={getWeatherInfo}>
                Search
                </button>
        </div>

        </div>    
        <Weathercard tempInfo={tempInfo}/>
        </>
    );
};

export default Temp