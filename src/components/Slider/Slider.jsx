import React from 'react'
import '../Slider/Slider.css';

function Slider() {
  return (
    <div id='slider' className='vh-100 carousel slide' data-bs-ride ="carousel" style={{paddingTop: "104px"}}>
        <div className='container h-100 d-flex align-items-center carousel-inner'> 
            
            <div className='text-center carousel-item active'>
                <h2 className='text-capitalize text-white'>best collection</h2> 
                <h1 className='text-uppercase py-2 fw-bold text-white'>new arrivals</h1> 
                <a className='btn mt-3 text-uppercase btn' href="#">shop now</a>
            </div>
            {/* ============= */}
            <div className='text-center carousel-item'>
                <h2 className='text-capitalize text-white'>best price & offter</h2> 
                <h1 className='text-uppercase py-2 fw-bold text-white'>new season</h1> 
                <a className='btn mt-3 text-uppercase btn' href="#">buy now</a>
            </div>

        </div>
        {/* PREV  */}
            <button className='carousel-control-prev' type='button' data-bs-target="#slider" data-bs-slide="prev">
                <span className='carousel-control-prev-icon'></span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target="#slider" data-bs-slide="next">
                <span className='carousel-control-next-icon'></span>
            </button>
        {/* END PREV  */}
    </div>
  )
}

export default Slider