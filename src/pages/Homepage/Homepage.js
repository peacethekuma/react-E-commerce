import React from 'react';
import './Homepage.scss';
import Directory from '../../components/Directory/Directory';

const Homepage = (props) => {
  console.log(props);
  return (
    <div className='homepage'>
      <Directory />
    </div>
  )
};

export default Homepage;
