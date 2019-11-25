import React from 'react';
import './HomePage.scss';
import Directory from '../../components/Directory/Directory';

const HomePage = (props) => {
  console.log(props);
  return (
    <div className='homePage'>
      <Directory />
    </div>
  )
};

export default HomePage;
