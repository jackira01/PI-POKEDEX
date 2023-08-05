import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { bringPokemons, bringTypes } from '../../actions/actions';
import Filters from '../FiltersBar/Filters';

import './Home.css';

const Cards = lazy(() => import('../PokeCards/PokeCards'));

export default function Home() {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);
  const searchList = useSelector((state) => state.searchList);
  const filter = useSelector((state) => state.filter);
  const types = useSelector((state) => state.types);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(bringPokemons());
    }
    if (!types.length) {
      dispatch(bringTypes());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className='main-home'>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div>
          {error ? (
            <div className='not-found'>{error}</div>
          ) : searchList.length ? (
            <>
              <Filters />
              <Cards array={searchList} />
            </>
          ) : filter.length ? (
            <>
              <Filters />
              <Cards array={filter} />
            </>
          ) : (
            <>
              <Filters />
              <Cards array={pokemons} />
            </>
          )}
        </div>
      </Suspense>
    </div>
  );
}
