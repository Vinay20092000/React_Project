import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';


import App from './App';
import ProdCRUD from './Components/precipes';
import About from './Components/pabout';
import Contact from './Components/pcontactus';
import Login from './Components/plogin';
import Register from './Components/pregister';
import Details from './Components/pdetails';

const routing = (
  <Router>
    <div className='header'>
    <a href="http://localhost:3000/"><img className='logo' src="logo.png"/></a>
    <span className="routerLink">
    <Link className='link' to="/">Home</Link>
    <Link className='link' to="/Login">Login</Link>
    <Link className='link' to="/Register">Register</Link>
    {/* <Link className='link' to="/ProdCRUD">Recipes</Link> */}
    <Link className='link' to="/About">About Us</Link>
    <Link className='link' to="/Contact">Contact Us</Link>
    
    
    </span>
    </div>

    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/ProdCRUD" element={<ProdCRUD/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route  path="/Details/:id"  element={ <Details /> } />
    </Routes>

  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

reportWebVitals();
