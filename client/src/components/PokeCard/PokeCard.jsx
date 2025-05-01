import React from 'react'
import { Link } from 'react-router-dom'

import './PokeCard.css'

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
          {types.map((Element, index) => (
            <div key={index} className='tooltip'>
              <img
                style={{ margin: '0 5px' }}
                src={`/icons/${Element}.svg`}
                alt={Element}
                width={30}
                height={30}
              />
              <span className='tooltip-text'>{Element}</span>
            </div>
          ))}
        </div>
      </div>

      <Link to={`/pokedex/detail/${id}`}>
        <button className='card-button'>Detail</button>
      </Link>
    </div>
  )
}
