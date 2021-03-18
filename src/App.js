import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HomePage} from './Components/HomePage';
import Settings from './Components/Settings';
import {ErrorBoundary} from './ErrorBoundary';
import './App.css';

//import * as path from './routes/constants/index';

function App() {
  return(
    <ErrorBoundary>   
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/settings' component={Settings} exact/>
          </Switch>
        </Router>
   </ErrorBoundary>

  );
}

export default App