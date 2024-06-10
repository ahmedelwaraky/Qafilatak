import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/ContactUs.css'
//images
import MAP from '../../assets/image/placeholder.png'
import QR from '../../assets/image/qrcode.png'
import IOS from '../../assets/image/ios.png'
import Android from '../../assets/image/Android.png'
import Out from '../../assets/image/iphone out.png'
import In from '../../assets/image/iphone in.png'

export default function ContactUs() {
  return (<>
    <section className='About-Us'>
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 ">
            <div className="pt-3">
              <h2 className='fw-bold fs-4'>We would like to hear from you !!</h2>
            </div>
            <form className='rounded-2 mt-4 w-75 '>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="" placeholder='Name'/>
                <div id="nameHelpBlock" className="form-text">
                    Your name must be 8-20 characters long, contain letters.
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail" placeholder='Example@.com'/>
                <div id="nameHelpBlock" className="form-text">
                    Your email must be 8-20 characters long, contain letters.
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Subject</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
            </form>
            
            <div className="mb-3 bg-dark rounded-2  d-flex justify-content-between w-75">
                  <div className="btn">
                    <button type="submit" className="btn btn-secondary px-5">Submit</button>
                  </div>
                  <div className="icons d-flex text-white align-items-center ps-3">
                    <i class="fa-solid fa-angle-right px-1" style={{color : '#707070' }}></i>
                    <i class="fa-solid fa-angle-right px-1" style={{color : '#999999' }}></i>
                    <i class="fa-solid fa-angle-right px-1" style={{color : '#c4c4c4' }}></i>
                </div>
              </div>
          </div> 
       
          <div className="col-md-6">
              <div className="info-contact pe-5">
                <p>
                  <i className="fa-solid fa-location-dot my-3" style={{ marginRight: '10px' }}></i>
                  111 Long Street name, region main street name, Egypt
                </p>
                <p>
                  <i className="fa-solid fa-phone my-3" style={{ marginRight: '10px' }}></i>
                  +698 1455 2145
                </p>
                <p>
                  <i className="fa-solid fa-phone my-3" style={{ marginRight: '10px' }}></i>
                  +698 1455 2145
                </p>
                <p>
                  <i className="fa-solid fa-envelope my-3" style={{ marginRight: '10px' }}></i>
                  Qafelatk@Hotmail.com
                </p>
                <p>
                  <i className="fa-solid fa-globe my-3" style={{ marginRight: '10px' }}></i> 
                  www.qafilatak.com
                </p>
              </div> 
            <div className="immm">
              <img src={MAP} className='w-75 pe-5' alt=''/>
            </div>
          </div> 

          {/* <div className="col-md-6">
            <div className="header  mt-5">
              <h3 className='fw-bold fs-5'>GET THE APP FPR MORE EXPERIENCE</h3>
            </div>
            <div className="d-flex  pt-3">
              <div className="qr ">
                <img src={QR} className='' alt=''/>
              </div>
              <div className=" pt-3 pe-4">
                <h6 className='fs-5'>Scan QR Code<br/>Track Your coder<br/>Fast Ddelivery</h6>
              </div>
            </div>
            <div className="Apps mt-4">
              <div className="">
                <h6 className='fw-bold'>Get Apps</h6>
              </div>
              <div className="img d-flex pt-3">
                <Link to=''><img src={IOS} className='' alt=''/></Link>
                <Link to=''><img src={Android} className='pe-2' alt=''/></Link>
                
              </div>
            </div>
            
          </div>

          <div className="col-md-6">
            <div className="out d-flex">
              <img src={Out} alt="" className=''/>
              <img src={Out} alt="" className=''/>
              <div className="in">
                <img src={In} alt="" className=''/>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </section>
    </>
  )
}
