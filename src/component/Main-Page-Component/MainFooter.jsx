import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/MainFooter.css'
export default function MainFooter() {
  return (<>
  <section className='Main-Footer'>
    <div className="d-flex justify-content-between px-5 py-4">
        <div className="media d-felx">
            <Link><i className="fa-brands fa-youtube px-1 fs-4 text-black"></i></Link>
            <Link><i className="fa-brands fa-x-twitter px-1 fs-4 text-black"></i></Link>
            <Link><i className="fa-brands fa-instagram px-1 fs-4 text-black"></i></Link>
            <Link><i className="fa-brands fa-facebook px-1 fs-4 text-black"></i></Link>    
        </div>
        <div className="ploicy">
            <Link to='' className='px-2 text-black fw-bold'>Help Center</Link>
            <Link to='' className='px-2 text-black fw-bold'>Privacy Policy</Link>
            <Link to='' className='px-2 text-black fw-bold'>Terms & Conditions</Link>
            <Link to='' className='px-2 text-black fw-bold'>Accessability</Link>
        </div>
    </div>
  </section>
  </>
  )
}
