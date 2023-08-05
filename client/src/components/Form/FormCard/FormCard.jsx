import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import { bringPokemons, postPokemon } from '../../../actions/actions';

import './FormCard.css';

export default function FormCard() {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);

  const [name, setName] = useState('');
  const [hp, setHp] = useState(1);
  const [attack, setAttack] = useState(1);
  const [defense, setDefense] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(1);
  const [image, setImage] = useState('');
  const [listTypes, setListTypes] = useState([]);
  const [postTypes, setPostTypes] = useState([]);
  const [activeModal, setActiveModal] = useState([false, '']);

  function verify(e) {
    e.preventDefault();
    if (listTypes.length < 4 && name) {
      dispatch(
        postPokemon({
          name,
          hp,
          attack,
          defense,
          speed,
          height,
          weight,
          image: image
            ? image
            : 'https://webstockreview.net/images/gaming-clipart-silhouette-10.png',
          types: postTypes,
        })
      );
      dispatch(bringPokemons());
      setActiveModal([true, 'Pokemon Creado!', 'successful']);
    } else {
      setActiveModal([true, 'complete the form correctly', 'warning']);
    }
  }

  const typesMap = types?.map((type, index) => (
    <option key={index} value={type.id}>
      {type.name}
    </option>
  ));

  function handleSelectType(e) {
    if (!listTypes.includes(e.target.value)) {
      //por alguna razon no toma el value como tipo numero entonces tengo que pasarlo a numero
      var search = types.filter(
        (Element) => Element.id === Number(e.target.value)
      );
      setListTypes([...listTypes, search[0].name]);
      setPostTypes([...postTypes, e.target.value]);
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    setListTypes(listTypes.filter((type) => type !== e.target.value));
  }

  return (
    <div className='form-card'>
      {activeModal[0] && (
        <div class='modal-container'>
          <div class='modal'>
            <h2>{activeModal[2]}</h2>
            <p>{activeModal[1]}</p>
            <button
              class='modal-button'
              onClick={() => setActiveModal([false, ''])}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className='title-form'>
        <p className=''>CREATE POKEMON</p>
      </div>
      <div className='form-container'>
        <form
          id='create-pokemon'
          className='input-container'
          onSubmit={(e) => verify(e)}
        >
          {' '}
          <div className='input-group'>
            <FormInput
              id={'name'}
              type={'text'}
              state={name}
              setState={setName}
            />
          </div>
          <div className='input-group'>
            <FormInput id={'hp'} type={'number'} state={hp} setState={setHp} />
          </div>
          <div className='input-group'>
            <FormInput
              id={'attack'}
              type={'number'}
              state={attack}
              setState={setAttack}
            />
          </div>
          <div className='input-group'>
            <FormInput
              id={'defense'}
              type={'number'}
              state={defense}
              setState={setDefense}
            />
          </div>
          <div className='input-group'>
            <FormInput
              id={'speed'}
              type={'number'}
              state={speed}
              setState={setSpeed}
            />
          </div>
          <div className='input-group'>
            <FormInput
              id={'heigth'}
              type={'number'}
              state={height}
              setState={setHeight}
            />
          </div>
          <div className='input-group'>
            <FormInput
              id={'weight'}
              type={'number'}
              state={weight}
              setState={setWeight}
            />
          </div>
          <div className='input-group'>
            <FormInput
              id={'image'}
              type={'text'}
              state={image}
              setState={setImage}
            />
          </div>
        </form>
        <div className='list-container'>
          <select onChange={(e) => handleSelectType(e)}>
            <optgroup label='Select a Type' />
            {typesMap}
          </select>
          {listTypes?.map((type, i) => (
            <div className='type-container' key={i}>
              <p>{type}</p>
              <button
                className='delete-button'
                value={type}
                onClick={(e) => handleDelete(e)}
              >
                Delete
              </button>
            </div>
          ))}
          <h4 className='error'>3 MAXIMUM TYPES</h4>
        </div>
      </div>
      <div className='button-container'>
        <button className='form-button' form='create-pokemon' type='submit'>
          send
        </button>
        <Link to='/home'>
          <button className='form-button'>Back</button>
        </Link>
      </div>
    </div>
  );
}
