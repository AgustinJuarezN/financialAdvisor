import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './../pages/HomePage';
import VerifyPage from '../pages/VerifyPage';
import Header from './../components/Header';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <div className='main'>
          <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/verify' component={VerifyPage} />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
