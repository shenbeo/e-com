import React from 'react'
import Bsections from '../BlogSection/Bsections.css';
import b1 from '../../assets/img/b1.webp';
import b2 from '../../assets/img/b2.jpg';
import b3 from '../../assets/img/b3.jpg';
function Bsection() {
  return (
    <section id='blogs' className='py-5'>
        <div className='container'>
            <div className='title text-center py-5'>
                <h2 className='position-relative d-inline-block'>Our Latest Blog</h2>
            </div>

            <div className='row g-3'>
                {/* -----1 */}
                <div className='card border-0 col-md-6 col-lg-4 bg-transparent my-3'>
                    <img className='card-title' src={b1} alt="" />
                    <div className='card-body px-0'>
                        <h4 className='card-title mt-3 text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam id minima quasi! Laudantium sit inventore, iste nostrum cupiditate soluta mollitia possimus culpa debitis officiis eaque recusandae repellat pariatur. Facilis.</p>
                            <p className='card-text'>
                                <small className='text-muted'>
                                    <span className='fw-bold'>Author: </span> John Doe
                                </small>
                            </p>
                            <a href="#" className='btn'>Read More</a>
                    </div>
                </div>
                {/* ----1 */}
                {/* -----2 */}
                <div className='card border-0 col-md-6 col-lg-4 bg-transparent my-3'>
                    <img className='card-title' src={b2} alt="" />
                    <div className='card-body px-0'>
                        <h4 className='card-title mt-3 text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam id minima quasi! Laudantium sit inventore, iste nostrum cupiditate soluta mollitia possimus culpa debitis officiis eaque recusandae repellat pariatur. Facilis.</p>
                            <p className='card-text'>
                                <small className='text-muted'>
                                    <span className='fw-bold'>Author: </span> John Doe
                                </small>
                            </p>
                            <a href="#" className='btn'>Read More</a>
                    </div>
                </div>
                {/* ----2 */}
                {/* -----3 */}
                <div className='card border-0 col-md-6 col-lg-4 bg-transparent my-3'>
                    <img className='card-title' src={b3} alt="" />
                    <div className='card-body px-0'>
                        <h4 className='card-title mt-3 text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam id minima quasi! Laudantium sit inventore, iste nostrum cupiditate soluta mollitia possimus culpa debitis officiis eaque recusandae repellat pariatur. Facilis.</p>
                            <p className='card-text'>
                                <small className='text-muted'>
                                    <span className='fw-bold'>Author: </span> John Doe
                                </small>
                            </p>
                            <a href="#" className='btn'>Read More</a>
                    </div>
                </div>
                {/* ----3 */}
            </div>
        </div>
    </section>
  )
}

export default Bsection
// 4901