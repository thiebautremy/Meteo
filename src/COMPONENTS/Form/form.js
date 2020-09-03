import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({city, handleOnSubmit, handlerChange}) => {
  const handlerOnChange = (e) => {
    handlerChange(e.target.value)
  }
  console.log(city);
  return (
  <form 
    className="form" 
    onSubmit={handleOnSubmit}
    >
        <input 
          type="text" 
          name="city" 
          id="city" 
          className="form__input" 
          placeholder="City" 
          value={city}
          onChange={handlerOnChange}
        />
  </form>
);}

export default Form;
