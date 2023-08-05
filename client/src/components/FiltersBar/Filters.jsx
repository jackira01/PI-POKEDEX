import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bringPokemonByType } from '../../actions/actions';
import { demoFilter, resetFilter } from '../../actions/filters.actions';

import './NavBar.css';

export default function Filters() {
  const dispatch = useDispatch();
  const [typeFilter, setTypeFilter] = useState('');

  const types = useSelector((state) => state.types);

  const handleChangeType = (e) => {
    if (e.target.value === 'none') {
      console.log('none');
    } else {
      dispatch(bringPokemonByType(e.target.value));
    }
  };

  const submitFilter = (e) => {
    e.preventDefault();
    dispatch(demoFilter(typeFilter));
  };

  const handleChangeFilter = (e) => {
    setTypeFilter(e.target.value);
  };
  const reset = () => {
    dispatch(resetFilter());
  };

  return (
    <div id='sidebar'>
      <ul>
        <li className='dividing-lines'>
          <span className='title-filter'>Type Of Pokemon</span>
          <select className='select-filter' onChange={handleChangeType}>
            <option>Choose a Type Of Pokemon</option>
            {types.map((type) => {
              return (
                // si no se le coloca un value especifico este tomara el valor mostrado como value
                <option key={type.id}>{type.name}</option>
              );
            })}
          </select>
        </li>

        <form onSubmit={submitFilter}>
          <li className='dividing-lines'>
            <span className='title-filter'>Pokemon By Alphabet</span>
            <select className='select-filter' onChange={handleChangeFilter}>
              <option>Choose An Order</option>
              <option value='AscendingAlphabet'>Ascending</option>
              <option value='DescendingAlphabet'>Descending</option>
            </select>
          </li>

          <li className='dividing-lines'>
            <span className='title-filter'>Created Or Existing</span>
            <select className='select-filter' onChange={handleChangeFilter}>
              <option>Choose a Data</option>
              <option value='Created'>Created</option>
              <option value='Existing'>Existing</option>
            </select>
          </li>

          <li className='dividing-lines'>
            <span className='title-filter'>Pokemon By Attack</span>
            <select className='select-filter' onChange={handleChangeFilter}>
              <option>Choose An Order</option>
              <option value='AscendingAttack'>Ascending</option>
              <option value='DescendingAttack'>Descending</option>
            </select>
          </li>

          {/*  <li>
            <span className='title-filter'>Attack Pokemon 50</span>
            <select className='select-filter' onChange={handleChangeFilter}>
              <option>Choose A Option</option>
              <option value={6}> 50 </option>
            </select>
          </li> */}

          <button className='button-filter'> Filter</button>
        </form>
        <button onClick={reset} className='button-filter'>
          {' '}
          Reset Filter
        </button>
      </ul>
    </div>
  );
}
