import { Email, Facebook, Instagram, MapOutlined, Phone, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-dark py-5'>
        <div className='container'>
            <div className='row text-white g-4'>
                <div className='col-md-6 col-lg-3'> 
                    <a className='text-uppercase text-decoration-none brand text-white' href="">A M Y STORE</a>
                    <p className='text-white text-muted mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsa numquam reiciendis repudiandae nesciunt quos provident corporis cum officiis sint labore facilis voluptatibus quam deleniti hic iste deserunt. Ipsam, atque.</p>
                </div>

                <div className='col-md-6 col-lg-3'>
                    <h5 className='fw-light'>Links</h5>
                    <ul className='list-unstyled'>
                        <li className='my-3'>
                            <a className='text-white text-decoration-none text-muted me-1' href="">Home</a>
                        </li>
                        <li className='my-3'>
                            <a className='text-white text-decoration-none text-muted me-1' href="">Collection</a>
                        </li>
                        <li className='my-3'>
                            <a className='text-white text-decoration-none text-muted me-1' href="">Blogs</a>
                        </li>
                        <li className='my-3'>
                            <a className='text-white text-decoration-none text-muted me-1' href="">About us</a>
                        </li>
                    </ul>
                </div>

                <div className='col-md-6 col-lg-3'>
                    <h5 className='fw-light mb-3'>Contact us</h5>
                    <div className='d-flex justify-content-start align-items-start my-2 text-muted '>
                        <span className=' me-3'>
                            <i><MapOutlined/></i>
                        </span>
                        <span className='fw-light'>
                            Ho Chi Minh City, Viet Nam
                        </span>
                    </div>
                    <div className='d-flex justify-content-start align-items-start my-2 text-muted '>
                        <span className=' me-3'>
                            <i><Email/></i>
                        </span>
                        <span className='fw-light'>
                            amystore.gmail.com
                        </span>
                    </div>
                    <div className='d-flex justify-content-start align-items-start my-2 text-muted '>
                        <span className=' me-3'>
                            <i><Phone/></i>
                        </span>
                        <span className='fw-light'>
                            +84 999 999 999
                        </span>
                    </div>
                </div>

                <div className='col-md-6 col-lg-3'>
                    <h5 className='fw-light mb-3'>Follow Us</h5>
                    <div className=''>
                        <ul className='list-unstyled d-flex'>
                            <li>
                                <a className='text-white text-decoration-none text-muted me-4 fs-4' href=""><Facebook/></a>
                            </li>
                            <li>
                                <a className='text-white text-decoration-none text-muted me-4 fs-4' href=""><Twitter/></a>
                            </li>
                            <li>
                                <a className='text-white text-decoration-none text-muted me-4 fs-4' href=""><Instagram/></a>
                            </li>
                            <li>
                                <a className='text-white text-decoration-none text-muted me-4 fs-4' href=""><Pinterest/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer