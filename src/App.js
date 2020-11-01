import React from 'react';
import  './App.css';
import Error from './pages/Error'
import Home from './pages/Home'
import Room from './pages/Room'
import SingleHome from './pages/SingleHome'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleHome} />
        <Route component={Error} />
      </Switch>
  
   </div>
  );
}

export default App;
