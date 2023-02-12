import React from 'react';
import Pros from './Pros.css';
import p1 from '../../assets/img/p1.jpg';
import p2 from '../../assets/img/p2.jpg';
import p3 from '../../assets/img/p3.jpg';
import p4 from '../../assets/img/p4.jpg';
import { Favorite } from '@material-ui/icons';
function Pro() {
  return (
    <section id='special' className='py-5'>
        <div className='container'>
            <div className='title text-center py-5'>
                <h2 className='position-relative d-inline-block'>Special Selection</h2>
            </div>

                <div className='special-list row g-0'>

                {/* -------1*/}
                    <div className='col-md-6 col-lg-4 col-xl-3 p-2'>
                        <div className='special-img position-relative overflow-hidden'>
                            <img className='w-100' src={p1} alt="" />
                            <span className='position-absolute d-flex  align-items-center justify-content-center text-bg fs-4'><Favorite/></span>
                        </div>
                            <div className='text-center'>
                                <p className='text-capitalize mt-3 mb-1'>gray shirt</p>
                                <span className='fw-bold d-block'>$ 45.00</span>
                                <a className='btn bg mt-3' href="#">Add to Cart</a>
                            </div>
                    </div>
                {/* -------1 */}
                {/* -------2*/}
                <div className='col-md-6 col-lg-4 col-xl-3 p-2'>
                        <div className='special-img position-relative overflow-hidden'> 
                            <img className='w-100' src={p2} alt="" />
                            <span className='position-absolute d-flex  align-items-center justifly-content-center text-bg fs-4'><Favorite/></span>
                        </div>
                            <div className='text-center'>
                                <p className='text-capitalize mt-3 mb-1'>gray shirt</p>
                                <span className='fw-bold d-block'>$ 45.00</span>
                                <a className='btn bg mt-3' href="#">Add to Cart</a>
                            </div>
                    </div>
                {/* -------2 */}
                {/* -------3*/}
                <div className='col-md-6 col-lg-4 col-xl-3 p-2'>
                        <div className='special-img position-relative overflow-hidden'> 
                            <img className='w-100' src={p3} alt="" />
                            <span className='position-absolute d-flex  align-items-center justifly-content-center text-bg fs-4'><Favorite/></span>
                        </div>
                            <div className='text-center'>
                                <p className='text-capitalize mt-3 mb-1'>gray shirt</p>
                                <span className='fw-bold d-block'>$ 45.00</span>
                                <a className='btn bg mt-3' href="#">Add to Cart</a>
                            </div>
                    </div>
                {/* -------3 */}
                {/* -------4*/}
                <div className='col-md-6 col-lg-4 col-xl-3 p-2'>
                        <div className='special-img position-relative overflow-hidden'> 
                            <img className='w-100' src={p4} alt="" />
                            <span className='position-absolute d-flex  align-items-center justifly-content-center text-bg fs-4'><Favorite/></span>
                        </div>
                            <div className='text-center'>
                                <p className='text-capitalize mt-3 mb-1'>gray shirt</p>
                                <span className='fw-bold d-block'>$ 45.00</span>
                                <a className='btn bg mt-3' href="#">Add to Cart</a>
                            </div>
                    </div>
                {/* -------4 */}

                </div>
        </div>
    </section>
  )
}

export default Pro