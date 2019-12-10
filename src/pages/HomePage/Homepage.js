import React from 'react';
import './HomePage.scss';
import Directory from '../../components/Directory/Directory';
import { PageContainer } from './styles';

const HomePage = props => {
  console.log(props);
  return (
    <PageContainer>
      <Directory />
    </PageContainer>
  );
};

export default HomePage;
