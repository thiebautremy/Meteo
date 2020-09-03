import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/spinner';
import Form from '../Form/form';
import Image from '../Image/image';

import './style.scss';

const WeatherWidget = () => {
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
  const handlerChange = (value) => {
    setCity(value);
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then((res)=>{
      // console.log(res.data.weather[0].icon);
      setTemp(Math.round(res.data.main.temp));
      setWeather(res.data.weather[0].main);
      // setLoading(false);
      setCountry(res.data.sys.country);
    })
    .catch((error) => console.log(error))
  }, [city]);

  

  return(
    <div className="weatherWidget">
      {loading && <Spinner />}
      {!loading && 
         <>
           <div className="weatherWidget__cityInfo">
              <Form 
                className="weatherWidget__cityInfo__city"
                city={city}
                handleOnSubmit={handleOnSubmit}
                handlerChange={handlerChange}
              >
              </Form>
              <p className="weatherWidget__cityInfo__country">{country}</p>
           </div>
            <div className="weatherWidget__weather">
              <Image weather={weather} className="weatherWidget__weather__image"/>
              <p className="weatherWidget__weather__temp">{temp} ° C</p>
            </div>
         </>
      }
    </div>
  );
};


WeatherWidget.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  country: PropTypes.string,
  weather: PropTypes.string,
  loading: PropTypes.bool,
};

export default WeatherWidget;
