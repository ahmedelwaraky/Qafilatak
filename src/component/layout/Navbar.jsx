import React from 'react';
import '../../assets/style/Navbar.css';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import Footer from './Footer';

export default function Navbar() {
  return (
    <>
      <section className='Navbar-Section'>        
        <div className="divvv  position-relative">
          <div className="topnav text-white  d-flex justify-content-center">
            <span>Sign up and get 20% off to your first order. <Link className='text-white fw-bold' to='#'>Sign Up Now</Link> </span>
          </div>
          <div className="close-icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div> 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" to='/'>LOGO</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					<Link className="nav-link" aria-current="page" to="/">Home</Link>
					</li>
					<li className="nav-item">
					<Link className="nav-link" to="/qawafel">Qawafel</Link>
					</li>
					<li className="nav-item">
					<Link className="nav-link" to="/onsale">On Sale</Link>
					</li>
					<li className="nav-item">
					<Link className="nav-link" to="/newarrivals">New Arrivals</Link>
					</li>
				</ul>              
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item mx-2">
						<i className="fa-solid fa-cart-shopping pt-3"></i>        
					</li>
					<li className="nav-item mx-2">
						<i className="fa-regular fa-heart pt-3"></i>    
					</li>
					<div className="login-input">
						<i className="fa-regular fa-user pt-1 mx-2"></i>
						<span className=''>Login</span>
						<i className="fa-solid fa-angle-down pt-2 mx-2"></i>
					</div>    
				</ul>
            </div>
          </div>
        </nav>
      </section>
	  <Slider></Slider>
	  <Footer/>
    </>
  );
}
