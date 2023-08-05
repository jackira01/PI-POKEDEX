import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bringDetail, clearDetail } from '../../actions/actions';
import DetailCard from './DetailCard';

import './DetailPage.css';

//si no le coloco un loader a mi componente detail me puede dar errores ya que le estaria pidiendo que trabaje
//con datos inexistentes.
//con el loader espero a que me traiga los datos donde miestras lo hace muestra el componente loader
// cuando termine ahi si me muestra el componente detailCard

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(clearDetail());
    dispatch(bringDetail(id));
  }, [id, dispatch]);

  return (
    <div className='detail-container'>
      <DetailCard />
    </div>
  );
}
