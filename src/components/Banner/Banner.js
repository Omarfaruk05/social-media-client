import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import banner from '../../photos/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div class="card bg-dark text-white">
                <img className="card-img" src={banner} alt="CardImage" />
                <div class=" banner-content">
                    <div className='d-flex justify-content-between align-items-center join w-100'>
                        <p className='arro mt-3'>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </p>
                        <button className='join-group btn text-white'>Join Group</button>
                    </div>
                    <h5 class="card-title">Computer Engineering</h5>
                    <p class="card-text">T142,765 Computer Engineers follow this</p>
                </div> 
            </div>
        </div>
    );
};

export default Banner;