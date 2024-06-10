import React from 'react'
export default function MainButton({type ,content ,disabled ,onClick ,className}) {
    
  return (
    <>
     <section id="themeButton">
      <div className="container">
        <div
          className={`theme py-1 px-3 m-auto rounded d-flex justify-content-between ${className}`}
          style={{ backgroundColor: '#797979' }}
        >
          <button type={type} className="btn text-white fs-5" onClick={onClick} disabled={disabled}>
            {content}
          </button>
          <i className="fa-solid fa-angles-right mt-2 fs-4 text-white"></i>
        </div>
      </div>
    </section>
    </>
  )
}
