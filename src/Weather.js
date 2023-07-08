import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';

 function Weather() {
    const [city, setCity] = useState('Varanasi');
    const [weather,setWeather] = useState([{name:"",main:[]}]);
    const [mn,setMain] = useState([{main:[]}])
    const [olddata,setolddata] = useState('');
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a1f8a61b74546825af1e0be106e797b&units=metric`;
    const CityChangeHandler = (event) => {
        setCity(event.target.value);
    };
    const oldDataChangeHandler = () =>
    {
        setolddata(city);
    }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response.data)
        setWeather(response.data)
        setMain(response.data.main)
    }).catch(error => {
        <p>Error </p>
    });
  },[olddata])
    return (
    <div>
        <input type='text' onChange={CityChangeHandler}></input>
        <input type='button' onClick={oldDataChangeHandler} value='Search'/>
        {console.log(mn.temp_min)}
        <h1>Showing Temperature of {weather.name}</h1>
        <h3> Current Temp = {mn.temp}, Min Temp = {mn.temp_min}</h3>
        
        
        
      
    </div>
  )
}
export default Weather;
