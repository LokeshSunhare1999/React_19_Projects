import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DetailHeader from '../components/DetailHeader';
import ImageContainer from '../components/ImageContainer';
import BasicDetails from '../components/BasicDetails';

const MovieDetail = () => {
  const location = useLocation();
  const movie = location?.state?.movie || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='movie-detail'>
      <DetailHeader movie={movie} />
      <ImageContainer movie={movie} />
      <BasicDetails movie={movie} />
    </div>
  )
}

export default MovieDetail
