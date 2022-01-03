import React from 'react';
import { Route , Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Errorpage from './components/Errorpage';
import Changepass from './components/Changepass';
const App = () => {
  return (
    <>

    <Navbar /> 

  <Switch>
    <Route exact path="/"> 
      <Home /> 
    </Route>

    <Route exact path="/about"> 
      <About /> 
    </Route>

    <Route exact path='/contact'> 
      <Contact /> 
    </Route>

    <Route exact path='/signup'> 
      <Signup /> 
    </Route>

    <Route exact path='/login'> 
      <Login /> 
    </Route> 

    <Route exact path='/changepass'> 
      <Changepass /> 
    </Route> 
    
    <Route >
      <Errorpage />
    </Route> 
  </Switch>

    </>
  )
};

export default App
