import React from 'react';
// import './App.scss';
import WeatherWidget from './COMPONENTS/WeatherWidget/WeatherWidget';

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <WeatherWidget />
    </div>
  );
}

export default App;
