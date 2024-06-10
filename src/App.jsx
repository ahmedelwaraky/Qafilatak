import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/component/authentication/Login'
import Register from '../src/component/authentication/Register'
import Navbar from '../src/component/layout/Navbar'
import Footer from '../src/component/layout/Footer'
import Slider from './component/layout/Slider';
import Home from './component/Main-Page-Component/Home';
import Influencers from './component/Main-Page-Component/Influencers';
import ContactUs from './component/Main-Page-Component/ContactUs';
import Qafilatak from './component/Qafilatak';
import Comp from './component/Main-Page-Component/Comp';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/comp' element={<Comp/>} />
        <Route path='/' element={<Qafilatak/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/influencers' element={<Influencers/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/slider' element={<Slider/>} />

      </Routes>
    </BrowserRouter>
  );
}
