import React from 'react'
import { Link } from 'react-router-dom'
import Android from '../../assets/image/Android.png'
import Ios from '../../assets/image/ios.png'
import '../../assets/style/Footer.css'

export default function Footer() {
  return (<>
  <section className='footer-section '>
    <div className='pt-5 bg-light'>
        <div className="row">
            <div className="col-md-3 pe-5">
                <h2>LOGO</h2>
                <h6 className='mt-5'>About Qafelatk</h6>
                <p className='pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing,<br></br> A quas amet nostrum impedit quam excepturi velit assumenda unde, eos architecto ipsam?</p>
            </div>
            
            <div className="col-md-3">
                <h6 className=''>Company</h6>
                <ul className='my-5'>
                <li className='my-3'><Link>Home</Link></li>
                <li className='my-3'><Link>Our Servies</Link></li>
                <li className='my-3'><Link>Conatct Us</Link></li>
                </ul>
            </div>

            <div className="col-md-3 sec-three">
                <h6 className=''>Office</h6>
                <div className="pt-3">
                    <p className=''><i class="fa-solid fa-location-dot my-2"></i> 111 Long Street name, <br/> region main street name, Egypt</p>
                    <p><i class="fa-solid fa-phone my-2"></i> +698 1255 2145</p>
                    <p><i class="fa-solid fa-envelope my-2"></i> Qafelatk@Hotmail.com</p>
                </div>
            </div>

            <div className="col-md-3">
                <h6>Download Our App </h6>
                <div className="imgs mt-5">
                    <Link to=''><img className='px-1' src={Android}/></Link>
                    <Link to=''><img className='px-1' src={Ios}/></Link>
                </div>
                <div className="social-media d-flex mt-5">
                    <h6>Follow us</h6>
                    <div className="social-icon pt-1 px-2">
                        <Link to=''><i class="fa-brands fa-youtube pe-1"></i></Link>
                        <Link to=''><i class="fa-brands fa-x-twitter pe-1"></i></Link>
                        <Link to=''><i class="fa-brands fa-instagram pe-1"></i></Link>
                        <Link to=''><i class="fa-brands fa-facebook pe-1"></i></Link>
                        <Link to=''><i class="fa-brands fa-linkedin-in pe-1"></i></Link>
                    </div>
                </div>
            </div> 
        </div>
        <div className="down-footer ">
            <div className="">
                <ul className='pt-3'>
                    <li className='px-2'><Link to='/'>PrivacyPolicy</Link></li>
                    <li className='px-2'><Link to='/'>Terms&Conditons</Link></li>
                    <li className='px-2'><Link to='/'>Accessability</Link></li>
                </ul>
                <div className="right-published d-flex justify-content-center text-white">
                    <p className='px-1'>All rights reserved ©2024. Developed By</p> 
                    <a href='/' className='text-info fw-bold'>Company</a>
                </div>
            </div>
        </div>
    </div>
  </section>
</>)
}
