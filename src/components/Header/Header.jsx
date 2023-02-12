import { Favorite, Search, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import '../Header/Header.css';
function Header() {
  return (

        <nav className='navbar navbar-expand-lg navbar-light bg-light py-4 '>
            <div className='container'>
                {/* LOGO */}
                    <a className='navbar-brand d-flex justify-content-between align-items-center order-lg-0' href="">
                        A M Y
                            <span className=' text-uppercase fw-lighter ms-2'>STORE</span> 
                    </a>
                {/* END LOGO */}
    
                {/* TEXT */}
                    <div className='order-lg-2 nav-btns'>
                        <button className='btn position-relative' type='button'> 
                            <i><ShoppingCart/></i>
                            <span className='top-0 start-100 position-absolute translate-middle badge bg'>1</span>
                        </button>
    
                        <button className='btn position-relative' type='button'> 
                            <i><Favorite/></i>
                            <span className='top-0 start-100 position-absolute translate-middle badge bg'>1</span>
                        </button>
    
                        <button className='btn position-relative' type='button'>
                            <i><Search/></i>
                        </button>
                    </div>
                       
                        {/* ICON MENNU */}
                        <button className='navbar-toggler border-0' type='button' data-bs-toggle = "collapse" data-bs-target = "#navMenu"> 
                            <span className='navbar-toggler-icon'></span> 
                         </button>
    
                            <div className='collapse navbar-collapse' id='navMenu'>
                                <ul className='navbar-nav mx-auto text-center'>
                                    <li className='nav-item px-2 py-2'>
                                        <a className='nav-link text-uppercase text-dark' href="#header">home</a>
                                    </li>
                                    <li className='nav-item px-2 py-2'>
                                        <a className='nav-link text-uppercase text-dark' href="#collection">collection</a>
                                    </li>
                                    <li className='nav-item px-2 py-2'>
                                        <a className='nav-link text-uppercase text-dark' href="#special">specials</a>
                                    </li>
                                    <li className='nav-item px-2 py-2'>
                                        <a className='nav-link text-uppercase text-dark' href="#blogs">blogs</a>
                                    </li>
                                    <li className='nav-item px-2 py-2'>
                                        <a className='nav-link text-uppercase text-dark' href="#about">abouts</a>
                                    </li>
                                    <li className='nav-item px-2 py-2'>
                                        <a className='nav-link text-uppercase text-dark' href="#popular">popular</a>
                                    </li>
                                </ul>
                            </div>
                        {/*END ICON MENNU */}
                {/* END TEXT */}
            </div>
        </nav>
  
  )
}

export default Header