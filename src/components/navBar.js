import React from 'react';
import { Link } from 'react-router-dom';
const NavigationBAr = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky">
            <div className="container">
                <div className="navbar-brand">Image Gallery</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className='nav-link' to='/gallery'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/slider'>Image Slider</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/service'>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBAr;