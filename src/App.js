import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import hello from './hello'
import Navbar from './Navbar'

 const App = () => (
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={hello} />
        </Switch>
      </Router>
    );
    
export default App