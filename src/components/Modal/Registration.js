import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import photo from '../../photos/signup.jpg'
import './Ragistration.css'

const Registration = (props) => {
    const [loginShow, setLoginShow] = useState(false);
    console.log(loginShow)

    const handleLogin =() => {
        props.onHide(false)
        setLoginShow(true)

    }
    return (
        <div>
            <Modal
                {...props}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <small>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</small>
                </Modal.Header>
                <Modal.Body>
                <div>
                    <div>

                    </div>
                    <div className='d-flex justify-content-between aling-items-cneter'>
                        <h2>Create Account</h2>
                        <p>
                            <span className='mt-2 me-0'>Already have an account? </span>
                            <button onClick={handleLogin} className='text-primary btn btn-link border-0 m-0 mb-1'> Sing In
                            </button>
                        </p>
                    </div>
                    <div className='d-flex gap-1'>
                        <div className='registration-content'>
                            <form>
                                <div className=''>
                                    <input className='form w-50 p-2' type="text" placeholder='First Name' />
                                    <input className='form w-50 p-2' type="text" placeholder='Last Name' />
                                </div>
                                <input className='form w-100 p-2 ' type="email" placeholder='Email' />
                                <input className='form w-100 p-2 ' type="password" placeholder='Password' />
                                <input className='form w-100 p-2 ' type="password" placeholder='Confirm Password' />
                                <input type="submit" value="Create Account" className='btn w-100 my-3 bg-primary text-white fw-bold py-2 rounded-5' />
                            </form>
                            <div>
                                <button className='w-100 mt-2 mb-1 py-2 rounded social-btn'> 
                                    <FontAwesomeIcon icon={faFacebook} className="me-1 fs-5 text-primary" />
                                    Sing up with Facebook
                                </button>
                                <button className='w-100 rounded py-2 social-btn'>
                                    <span className='me-3'>
                                        <FontAwesomeIcon icon={faGoogle} className="me-1 fs-5 text-danger" />
                                    Sing up with Google
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='registration-img'>
                            <img className='img-fluid' src={photo} alt="" />
                        </div>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                <Login show={loginShow} onHide = {() => setLoginShow(true)}></Login>
            </Modal>
        </div>
    );
};

export default Registration;