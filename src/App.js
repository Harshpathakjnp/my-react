import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';




//
let city = "varanasi";
function App(props) {


  const [weather, setWeather] = useState([{ name: "", main: [] }]);
  const [mn, setMain] = useState([{ main: [] }]);
  
  async function getWeatherHandler() {
    // const city="ghazipur";
    const appid = "4a1f8a61b74546825af1e0be106e797b";
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid + "&units=metric");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    setMain(data.main);

  }
  useEffect(() => {
    //getWeatherHandler();

  }

  );

  const handleChange = event => {
    //setWeather(event.target.value);
    city = event.target.value;
    console.log('value is:', event.target.value);
  };



  return (<>
<center>
<div className='center_div'>
  <div className='main_div'>
    <div className="App">

      <input type="text"
        placeholder="city"
        id="weather"
        name="weather"
        onChange={handleChange}
      />


      <button type='button' onClick={getWeatherHandler}>Search</button>
      <h2>weather {weather.name}</h2>
      <h2>weather {mn.temp}</h2>



      </div>
      </div>
    </div>
    </center>
  </>
  );
}

export default App;