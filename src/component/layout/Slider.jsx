import React from 'react'
import '../../assets/style/Slider.css'
import Cover from '../../assets/image/cover slider.jpg'
import Offer from '../../assets/image/offer.png'



export default function Slider() {
  return (<>
  <section className='slider-section'>
    <div className="container m-auto">
        <div className="cover">
            <img src={Cover} alt=''/>
        </div>
        <div className="row">

            <div className="left-sec">
                <div className="col-md-6 text-center pt-5">
                    <h6 className='pt-2' >EXPLOER TOP PICKS THIS WEEK IN EACH QAFELA</h6>
                    <p className='fw-lighter pt-4'>Use Promocode TO GET COMFY PRICE</p>
                    <h5 className='fw-bolder pt-'>Q A F E L A 0 8 2 4</h5>
                    <img src={Offer} className='w-25 pt-2' alt=''/>
                    <div className="div d-flex">
                        <h6 className='under'>EXPLORE ALL OFFERED ITEMS</h6>
                        {/* <div className="right-icon">
                            <i className="fa-solid fa-angle-right"></i>
                            <i className="fa-solid fa-angle-right"></i>
                            <i className="fa-solid fa-angle-right"></i>
                        </div> */}
                    </div>
                </div>
            </div>
{/* 
            <div className="right-sec">
                <div className="col-md-6">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={Por1} className="w-25" alt=""/>
                            </div>
                            <div className="carousel-item">
                            <img src={Por2} className="w-25" alt=""/>
                            </div>
                            <div className="carousel-item">
                            <img src={Por3} className="w-25" alt=""/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  </section>
  </>
    
  )
}
