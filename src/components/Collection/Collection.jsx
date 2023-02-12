import React from 'react'
import '../Collection/Collection.css';
import c1 from '../../assets/img/c1.jpg'
import c2 from '../../assets/img/c2.jpg'
import c3 from '../../assets/img/c3.jpg'
import c4 from '../../assets/img/c4.jpg'
import { Star } from '@material-ui/icons';

function Collection() {
  return (
    <section id='collection' className='py-5'>
        <div className='container'>

            <div className='title text-center'>
                <h2 className='position-relative d-inline-block'>Collection</h2>
            </div>

            <div className='row g-0'>
                <div className='d-flex flex-wrap justify-content-center mt-5'>
                    <button className='btn m-2 text-dark active-filter-btn' type='button'>All</button>
                    <button className='btn m-2 text-dark' type='button'>Best Sellects</button>
                    <button className='btn m-2 text-dark' type='button'>Featured</button>
                    <button className='btn m-2 text-dark' type='button'>New Arrival</button>
                </div>

                <div className='collection-list mt-4 row gx-0 gy-3'>
                    {/* ------1 */}
                    <div className='col-md-6 col-lg-4 col-xl-3 p-2 best'>

                        <div className='collection-img position-relative'>
                            <img className='w-100' src={c1} alt="" />
                            <span className='position-absolute bg text-white d-flex align-items-center justify-content-center'>sale</span>
                        </div>
                        <div className='text-center'>
                            <div className='rating mt-3'>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                            </div>
                            <p className='text-capitalize  my-1'>shirt</p>
                            <span className='fw-bold'>$ 45.50</span>
                        </div>

                    </div>
                    {/* ------1 */}
                    {/* ------2 */}
                    <div className='col-md-6 col-lg-4 col-xl-3 p-2'>

                        <div className='collection-img position-relative'>
                            <img className='w-100' src={c2} alt="" />
                            <span className='position-absolute bg text-white d-flex align-items-center justify-content-center'>sale</span>
                        </div>
                        <div className='text-center'>
                            <div className='rating mt-3'>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                            </div>
                            <p className='text-capitalize  my-1'>shirt</p>
                            <span className='fw-bold'>$ 45.50</span>
                        </div>

                    </div>
                    {/* ------2 */}
                    {/* ------3 */}
                    <div className='col-md-6 col-lg-4 col-xl-3 p-2'>

                        <div className='collection-img position-relative'>
                            <img className='w-100' src={c3} alt="" />
                            <span className='position-absolute bg text-white d-flex align-items-center justify-content-center'>sale</span>
                        </div>
                        <div className='text-center'>
                            <div className='rating mt-3'>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                            </div>
                            <p className='text-capitalize  my-1'>shirt</p>
                            <span className='fw-bold'>$ 45.50</span>
                        </div>

                    </div>
                    {/* ------3 */}
                    {/* ------4 */}
                    <div className='col-md-6 col-lg-4 col-xl-3 p-2'>

                        <div className='collection-img position-relative'>
                            <img className='w-100' src={c4} alt="" />
                            <span className='position-absolute bg text-white d-flex align-items-center justify-content-center'>sale</span>
                        </div>
                        <div className='text-center'>
                            <div className='rating mt-3'>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                                <span className='text-bg'><Star/></span>
                            </div>
                            <p className='text-capitalize  my-1'>shirt</p>
                            <span className='fw-bold'>$ 45.50</span>
                        </div>

                    </div>
                    {/* ------4 */}
                </div>
            </div>

        </div>
    </section>
  )
}

export default Collection

// 32.51