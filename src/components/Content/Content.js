import React from 'react';
import Image1 from '../../photos/photo-1.png'
import Image2 from '../../photos/photo-2.png'
import Image3 from '../../photos/photo-3.png'
import Person from '../../photos/man1.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBriefcase, faCalendarDay, faLocationDot, faPen, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import "./Content.css"
import Registration from '../Modal/Registration';

const Content = () => {
    return (
        <div>
            <Registration></Registration>
            <div class="row  mb-5">
                <div class="col-12 col-sm-6 col-md-8">
                    <div className='border border-1 rounded my-2'>
                        <div>
                            <img className='img-fluid w-100' src={Image1} alt="" />
                        </div>
                        <div className='p-2'>
                            <h5>Article</h5>
                            <div className='d-flex'>
                            <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                            <DropdownButton
                            variant ="btn border-0 btn-light fw-bold fs-5"
                            title= '...'
                            drop='start'
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> 
                            </DropdownButton>
                            </div>
                            <p className='text-muted'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img className='rounded-5' width="48px" height="48px" src={Person} alt="" />
                                    <h6>Omar Faruk</h6>
                                </div>
                                <div className='d-flex align-items-center mt-2 gap-2'>
                                <p>
                                        <FontAwesomeIcon icon={faEye} className="me-1" />
                                        1.4k views
                                    </p>
                                    <button className='btn mb-3 border-0 btn-light'>
                                        <FontAwesomeIcon icon={faShareNodes} className="me-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-1 rounded my-2'>
                        <div>
                            <img className='img-fluid w-100' src={Image2} alt="" />
                        </div>
                        <div className='p-2'>
                            <h5>
                                <FontAwesomeIcon icon={faBookOpen} className="me-1" />
                                Education 
                            </h5>
                            <div className='d-flex'>
                            <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                            <DropdownButton
                            variant ="btn border-0 btn-light fw-bold fs-5"
                            title= '...'
                            drop='start'
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> 
                            </DropdownButton>
                            </div>
                            <p className='text-muted'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img className='rounded-5' width="48px" height="48px" src={Person} alt="" />
                                    <h6>Omar Faruk</h6>
                                </div>
                                <div className='d-flex align-items-center mt-2 gap-2'>
                                <p>
                                        <FontAwesomeIcon icon={faEye} className="me-1" />
                                        1.4k views
                                    </p>
                                    <button className='btn mb-3 border-0 btn-light'>
                                        <FontAwesomeIcon icon={faShareNodes} className="me-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-1 rounded my-2'>
                        <div>
                            <img className='img-fluid w-100' src={Image3} alt="" />
                        </div>
                        <div className='p-2'>
                            <h5>
                                <FontAwesomeIcon icon={faCalendarDay} className="me-1" />
                                Meetup</h5>
                            <div className='d-flex align-items-center'>
                            <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                            <DropdownButton
                            variant ="btn border-0 btn-light fw-bold fs-5"
                            title= '...'
                            drop='start'
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> 
                            </DropdownButton>
                            </div>
                            <div className='d-flex gap-4 mb-2'>
                                <small>
                                    <FontAwesomeIcon icon={faCalendarDay} className="me-1" />
                                    Fri, 12 Oct, 2022</small>
                                <small>
                                    <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                                    Ahmedabad, India</small>
                            </div>
                            <div>
                                <button className='btn w-100 border my-1 text-danger fw-bold'>Visit Website</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img className='rounded-5' width="48px" height="48px" src={Person} alt="" />
                                    <h6>Omar Faruk</h6>
                                </div>
                                <div className='d-flex align-items-center mt-2 gap-2'>
                                <p>
                                        <FontAwesomeIcon icon={faEye} className="me-1" />
                                        1.4k views
                                    </p>
                                    <button className='btn mb-3 border-0 btn-light'>
                                        <FontAwesomeIcon icon={faShareNodes} className="me-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-1 rounded my-2'>
                        <div className='p-2'>
                            <h5>
                                <FontAwesomeIcon icon={faBriefcase} className="me-1" />
                                Jobs
                            </h5>
                            <div className='d-flex justify-content-between'>
                            <h2>Software Developer</h2>

                            <DropdownButton
                            variant ="btn border-0 btn-light fw-bold fs-5"
                            title= '...'
                            drop='start'
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> 
                            </DropdownButton>

                            </div>
                            <div className='d-flex gap-4 mb-2'>
                                <small>
                                    <FontAwesomeIcon icon={faBriefcase} className="me-1" />
                                    Innovaccer Analytics Private Ltd.
                                </small>
                                <small>
                                    <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                                    Nodia, India</small>
                            </div>
                            <div>
                                <button className='btn w-100 border my-1 text-success fw-bold'>Apply on Timesjobs</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img className='rounded-5' width="48px" height="48px" src={Person} alt="" />
                                    <h6>Omar Faruk</h6>
                                </div>
                                <div className='d-flex align-items-center mt-2 gap-2'>
                                    <p>
                                        <FontAwesomeIcon icon={faEye} className="me-1" />
                                        1.4k views
                                    </p>
                                    <button className='btn mb-3 border-0 btn-light'>
                                        <FontAwesomeIcon icon={faShareNodes} className="me-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4" >
                    <div id='location'>
                        <div className="d-flex justify-content-between align-items-center ms-2 mb-0">
                            <p className='mb-0'>Nodia, India</p>
                            <p className='mb-0'>
                                <FontAwesomeIcon icon={faPen}/>
                            </p>
                        </div>
                        <hr className='mt-0' />
                        <p className='ms-2 text-muted small'>Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Content;