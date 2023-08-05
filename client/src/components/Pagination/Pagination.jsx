import React, { useState } from 'react';

import './Pagination.css';

export default function Pagination({ currentPage, setCurrentPage, max }) {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setCurrentPage(parseInt(currentPage) + 1);
  };

  const LastPage = () => {
    setInput(parseInt(input) - 1);
    setCurrentPage(parseInt(currentPage) - 1);
  };

//vendria a ser el condicional para hababilitar o no el input
  const onKeyDown = (e) => {
    const value = e.target.value;

    //este numero de key vendria siendo la tecla enter enter
    if (e.keyCode === 13) {
      setCurrentPage(parseInt(value));
      if (
        //este es para verificar que el numero ingresado no sea menor a 1
        parseInt(value < 1) ||
        //este es para verificar que el numero ingresado no sea mayor al numero maximo de paginas
        parseInt(value) > Math.ceil(max) ||
        //este para verificar que coloque solo numeros
        isNaN(parseInt(value))
      ) {
        //si se cumple setea en la primer pagina
        setCurrentPage(1);
        setInput(1);
      } else {
        setCurrentPage(parseInt(value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className='container-pagination-button'>
      {/*  para evitar que al darle click al botton me lleve a una pagina INexistente le agrego la etiqueta disable con su respectiva propiedad */}
      <input
      className='input-pagination'
        onChange={onChange}
        onKeyDown={(e) => onKeyDown(e)}
        value={input}
        autoComplete='off'
      />
      <p className='text-p'>de {max}</p>
      <button
        className='button-back-next svg-left'
        disabled={currentPage === 1 || currentPage < 1}
        onClick={LastPage}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-narrow-left'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          strokeWidth='1.25'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5 12l14 0'></path>
          <path d='M5 12l4 4'></path>
          <path d='M5 12l4 -4'></path>
        </svg>
        <span>Back</span>
      </button>

      <button
        className='button-back-next svg-rigth'
        disabled={currentPage === max || currentPage > max}
        onClick={nextPage}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-narrow-right'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          strokeWidth='1.25'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5 12l14 0'></path>
          <path d='M15 16l4 -4'></path>
          <path d='M15 8l4 4'></path>
        </svg>
        <span>Next</span>
      </button>
    </div>
  );
}
