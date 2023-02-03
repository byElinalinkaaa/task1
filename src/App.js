// import React, {Component} from "react";
// import Reducer from './components/Reducer';
import './App.css';
import Toggle from './components/Toggle';
import Themes from './components/Themes';
import Reducer from './components/Reducer';


function App() {
  return (
    <div className="App">
      <Toggle />
       <Themes />
      <Reducer />
    </div>
  );
}

export default App;   


