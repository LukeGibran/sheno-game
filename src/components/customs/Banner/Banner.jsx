import React from 'react';
import './Banner.css';

const Banner = ({ message }) => {
  return (
    <div className='ribbon'>
      {message}
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default Banner;
