import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default action => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, [])
}