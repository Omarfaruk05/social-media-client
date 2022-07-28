import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './NavComponent.css'
import Registration from '../Modal/Registration';

const NavComponent = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Navbar className='navbar'>
                <Navbar.Brand href="#home">ATG.<span>WORLD</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="me-1 search-icon " />
                   <Form.Control className='bg-light ps-5 input-field' placeholder='Search for your favorite groups in ATG'/>
                </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='pt-4'>
                   <p> <span className='pt-5'>Create account</span> <button  onClick={() => setModalShow(true)} className='text-primary btn btn-link border-0 mb-1 pb-1' data-toggle="modal" data-target="#exampleModalCenter"> It's free</button></p>
                   <Registration show={modalShow} setModalShow={setModalShow} onHide = {() => setModalShow(false)}></Registration>
                </Navbar.Text>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default NavComponent;