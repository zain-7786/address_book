import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HomePage} from './Components/HomePage';
import Settings from './Components/Settings';
import {ErrorBoundary} from './ErrorBoundary';
import './App.css';
import { Layout } from 'antd';
//import * as path from './routes/constants/index';

function App() {
  const { Header, Footer } = Layout;
  return(
    <ErrorBoundary>
      <Layout>
        <Header>
          <h1 style={{ color: 'white'}}>Address Book</h1>
        </Header>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/settings' component={Settings} exact/>
          </Switch>
        </Router>

        <Footer>
            Address Book Exercise ©2021 Created by Zain
        </Footer>
      </Layout>
   </ErrorBoundary>

  );
}

export default App