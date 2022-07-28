import React from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo from '../../photos/signup.png'


const Login = () => {
    return (
        <div>
            <div>
                <div>
                    <div class="modal fade modal" id="loginModalCenter" tabindex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div className='modal-header'>
                                    <small className='mx-auto' id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</small>
                                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className=' m-4'>
                                    <div className='d-flex justify-content-between aling-items-cneter'>
                                        <h2>Sign In </h2>
                                        <p>
                                            <small className='mt-2 me-0'>Don’t have an account yet?</small>
                                            <button data-toggle="modal" data-dismiss="modal" data-target="#registerModalCenter"className='text-primary btn btn-link border-0 mb-1 pb-1 fs-7' >Create new for free!</button>
                                        </p>
                                    </div>
                                    <div className='d-flex gap-1'>
                                        <div className='registration-content'>
                                            <form>
                                                <input className='form w-100 p-2 ' type="email" placeholder='Email' />
                                                <input className='form w-100 p-2 ' type="password" placeholder='Password' />
                                                <input type="submit" value="Sign In" className='btn w-100 my-3 bg-primary text-white fw-bold py-2 rounded-5' />
                                            </form>
                                            <div>
                                                <button className='w-100 mt-2 mb-2 py-2 rounded social-btn'> 
                                                    <FontAwesomeIcon icon={faFacebook} className="me-1 fs-5 text-primary" />
                                                    Sing up with Facebook
                                                </button>
                                                <button className='w-100 rounded py-2 social-btn'>
                                                    <span className='me-3'>
                                                        <FontAwesomeIcon icon={faGoogle} className="me-1 fs-5 text-danger" />
                                                    Sing up with Google
                                                    </span>
                                                </button>
                                                <button className='text-primary btn btn-link border-0 mb-1 pb-1 fs-7 mx-auto w-100' >Forgot Password?</button>
                                            </div>
                                        </div>
                                        <div className='registration-img'>
                                            <img className='img-fluid' src={photo} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;