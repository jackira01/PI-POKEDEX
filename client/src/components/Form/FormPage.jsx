import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bringTypes } from '../../actions/actions';
import FormCard from './FormCard/FormCard';

export default function FormPage() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    if (!types.length) {
      dispatch(bringTypes());
    }// eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <FormCard />
    </>
  );
}
