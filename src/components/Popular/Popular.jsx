import React from 'react'
import y1 from '../../assets/img/y1.jpg';
import y2 from '../../assets/img/y2.jpg';
import y3 from '../../assets/img/y3.jpg';
import y4 from '../../assets/img/y4.jpg';
import y5 from '../../assets/img/y5.jpg';
import y6 from '../../assets/img/y6.jpg';
import y7 from '../../assets/img/y7.jpg';
import y8 from '../../assets/img/y8.jpg';
import y9 from '../../assets/img/y9.jpg';

function Popular() {
  return (
    <section id='popular' className='py-5'>
        <div className='container'>
            <div className='title text-center pt-3 pb-5'>
                <h2 className='position-relative d-inline-block ms-4'>Popular Of This Year</h2>
            </div>

            <div className='row'>
                {/* ========= */}
                <div className='col-md-6 col-lg-4 row g-3'>
                    <h3 className='fs-5'>Top Rated</h3>

                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y1} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y2} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y3} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                </div>
                {/* ========= */}
                 {/* ========= */}
                 <div className='col-md-6 col-lg-4 row g-3'>
                    <h3 className='fs-5'>Best Selling</h3>

                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y4} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y5} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y6} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                </div>
                {/* ========= */}
                 {/* ========= */}
                 <div className='col-md-6 col-lg-4 row g-3'>
                    <h3 className='fs-5'>On Sale</h3>

                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y7} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y8} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                        <div className='d-flex align-item-start justifly-content-start'> 
                            <img className='img-fluid w-25 pe-3' src={y9} alt="" />
                                <div>
                                    <p className='mb-0'>Blue Shirt</p>
                                    <span>$ 20.00</span>
                                </div>
                        </div>
                        {/* ------ */}
                </div>
                {/* ========= */}
            </div>
        </div>
    </section>
  )
}

export default Popular