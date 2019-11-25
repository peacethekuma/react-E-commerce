import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props);
  return(<div>HATS PAGE</div>);};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
