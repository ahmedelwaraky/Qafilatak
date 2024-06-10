import React from 'react'
import '../../assets/style/Home.css'
import MainButton from './MainButton'
//img
import Man from '../../assets/image/Man.png'
import Woman from '../../assets/image/woman.png'

export default function Home() {
  return (
    <>
    <section className='Home-section'>
        <div className="container">
            <div className="header text-center p-5">
                <h1>WebSite 3 Line Short Description Here</h1>
                <div className="d-flex">
                  <img src={Woman} alt='' className='one'/>
                  <h6 className='py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut eligendi tempora ipsa officiis amet dolores cupiditate, culpa quasi? Nihil impedit ullam maxime. Laboriosam amet voluptate adipisci inventore, laborum voluptatibus!
                  Natus, iure excepturi. Necessitatibus iste molestiae rem aliquid fugit, quo voluptas ipsum amet et voluptate non dolorem ducimus expedita, corrupti, magnam aperiam voluptates debitis facere vel totam. Mollitia, voluptatum rerum.</h6>
                  <img src={Man} alt='' className='two pt-5 mt-5'/>
                </div>
            </div>
            <MainButton content={"Go Home"} className='w-25'/>
            <div className="images d-flex justify-content-around position-relative ">
              <img src={Man} alt='' className='three'/>
              <img src={Woman} alt='' className='four pt-5 mt-5'/>
            </div>
            <div className="images d-flex justify-content-around position-relative ">
              <img src={Man} alt='' className='five'/>
            </div>
          
        </div>
        

    </section>
    </>
  )
}
