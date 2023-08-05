import React from 'react';
import { Link } from 'react-router-dom';

import './PokeCard.css';

export default function PokeCard({ id, name, image, types }) {
  return (
    <div className='card'>
      <div className='card-details'>
        <div className='container_image'>
          <img src={image} alt={name} />
        </div>

        <h2 className='text-title'>{name}</h2>
        <div className='text-types'>
          <h3>Types:</h3>
          <p> {types.map((Element) => `${Element} `)}</p>
        </div>
      </div>

      <Link to={`/pokedex/detail/${id}`}>
        {' '}
        <button className='card-button'>Detail</button>{' '}
      </Link>
    </div>
  );
}
