import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/MainNav.css'
export default function MainNav() {
  return (<>
   <section className='Main-Nav pt-4 '>
    <div className="container">
    <nav className="navbar navbar-expand-lg  rounded-2 mb-3 ">
            <div className="container-fluid">
                <Link className="navbar-brand" to=''>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  m-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to=''>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Qwafile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Montij</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Human Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Influencers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>About Qafilatak</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Contact Us</Link>
                    </li>
                
                </ul>
                </div>
            </div>
    </nav>
    </div>
  
    </section></>
  )
}
