import React from 'react';

import './FormInput.css';

export default function FormInput({
  id,
  state,
  setState,
  example,
  disableCondition,
  type,
}) {
  const handleChange = (e) => {
    setState(e.target.value);
  };


  function validatorNumber() {
    if (type === 'number') {
      if (state < 1 || state > 100) {
        return 'range between 1 and 100';
      }
    }
  }
  
  function validatorName() {
    if(id === 'name') {
      if(!state){
        return 'Enter Name'
      }
    }
  }

  return (
    <div>
      <p className='form-input-title' htmlFor={id}>
        {id}
      </p>
      <input
        className='input-form'
        autoComplete='off'
        type={type}
        id={id}
        placeholder={example}
        value={state}
        onChange={handleChange}
        disabled={disableCondition}
      />
      <p className='error'>{validatorNumber() || validatorName()}</p>
    </div>
  );
}
