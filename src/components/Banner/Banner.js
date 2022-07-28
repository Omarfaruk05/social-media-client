import React from 'react';
import banner from '../../photos/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div class="card bg-dark text-white">
                <img className="card-img" src={banner} alt="CardImage" />
                <div class=" banner-content">
                    <h5 class="card-title">Computer Engineering</h5>
                    <p class="card-text">T142,765 Computer Engineers follow this</p>
                </div> 
            </div>
        </div>
    );
};

export default Banner;