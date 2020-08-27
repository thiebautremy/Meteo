import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/spinner';

import './style.css';

const WeatherWidget = () => {
  const [temp, setTemp] = useState(0);
  const [city] = useState('Lima');
  const [coord, setCoord] = useState(0);
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then((res)=>{
      setTemp(Math.round(res.data.main.temp))
      setCoord(res.data.coord);
      setWeather(res.data.weather[0].main);
      setLoading(false);
    })
    .catch((error) => console.log(error))
  }, [city]);
  return(
    <div className="weatherwidget">
      {loading && <Spinner />}
      {!loading && 
        <>
          <p className="weatherwidget__city">{city}</p>
          <p className="weatherwidget__coord">Lat : {coord.lat}</p>
          <p className="weatherwidget__coord">Lon : {coord.lon}</p>
          <p className="weatherwidget__weather">{weather}</p>
          <p className="weatherwidget__temp">{temp} ° C</p>
        </>
      }
    </div>
  );
};


WeatherWidget.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  coord: PropTypes.number,
  weather: PropTypes.string,
};

export default WeatherWidget;
