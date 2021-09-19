import React from 'react';
import { useEffect } from 'react';

const HomePage = ({ history }) => {
  useEffect(() => {
    history.push('login');
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
