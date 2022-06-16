import React, { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ( {value} ) => {
  
  const [ counter, setcounter] = useState( value );


  const handleAdd = () => {
    // console.log(e);
    setcounter(  counter + 1 )
  }

  const handleSubstract  = () => {
    setcounter(  counter - 1 )
  }


  const handleReset = () => {
    setcounter(   value )
  }

  return (

    <>
      <h1>CounterApp</h1>
      <hr></hr>
      <h2> { counter } </h2>
      <button onClick={ handleAdd } >+1</button>
      <button aria-label="btn-reset" onClick={ handleReset } >Reset</button>
      <button onClick={ handleSubstract } >-1</button>
    </>

  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};
