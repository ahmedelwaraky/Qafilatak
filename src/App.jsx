import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/component/authentication/Login'
import Register from '../src/component/authentication/Register'
import Home from './component/Main-Page-Component/Home';
import Influencers from './component/Main-Page-Component/Influencers';
import ContactUs from './component/Main-Page-Component/ContactUs';
import Qafilatak from './component/Qafilatak';
import Comp from './component/Main-Page-Component/Comp';
import MainFooter from './component/Main-Page-Component/MainFooter';
import MainNav from './component/Main-Page-Component/MainNav';
import Montij from './component/Main-Page-Component/Montij';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Qafilatak/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/influencers' element={<Influencers/>}/>
        <Route path='/montij' element={<Montij/>}/>
        <Route path='/comp' element={<Comp/>}/>
        {/* Auth  */}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* Chakra  Component*/}
        <Route path='/mainfooter' element={<MainFooter/>}/>
        <Route path='/mainnav' element={<MainNav/>}/>
      </Routes>
    </BrowserRouter>
  );
}
