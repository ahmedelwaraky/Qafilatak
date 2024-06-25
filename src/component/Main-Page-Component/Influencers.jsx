import React from 'react';
import '../../assets/style/Influencers.css';
import MainButton from './MainButton';
import HHH from '../../assets/image/Rectangle 8403.png';
import Influencer from '../../assets/image/iphone-14-pro.png';
import MainFooter from '../Main-Page-Component/MainFooter';

export default function Influencers() {
  return (
    <>
      <section className='Influencers-Section'>
        <div className="layout">
          <img src={HHH} alt='' className='back'></img>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-6 left-sec">
              <img src={Influencer} alt='' className="phone"/>
            </div>
            <div className="col-md-6 right-sec pb-5 mb-5">
              <h2 className='text-white text-center pb-4 mb-4'>
                HEADER ABOUT 2 LINES DESCRIPTION ABOUT INFLUENCERS
              </h2>
              <h6 className='pb-3 text-white text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quaerat rem aut ratione tempora. Maiores voluptatum perferendis fugit ea doloribus aspernatur rem velit cum vel reprehenderit, perspiciatis eveniet atque nesciunt.
              </h6>
              <MainButton type="button" content="Influencers Page" disabled={false} className='w-50'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
