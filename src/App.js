import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import VsjA from './components/VsjA';
import StateUp from './components/StateUp';
import MapUse from './components/MapUse';
//
function App(props) {
  const [mydata, setMyData] = useState(0);
  const saveData = (n1) => {

    const data = { ...n1 };
    console.log("App");

    setMyData(n1);
    console.log(mydata);
  };
  return (
    <div className="App">
      {/* <h2>from VsjA {mydata}</h2>
      <VsjA onSaveData={saveData} /> */}
      {/* <h2>
        From StateUp = {mydata}
      </h2>
      <StateUp onSaveData={saveData} /> */}
      <MapUse data = {[1,2,3,4]}></MapUse>

    </div>
  );
}

export default App;