import React from 'react';
import Content from '../Content/Content';
import './Body.css'

const Body = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center mt-4 '>
                <div className='d-flex gap-3 align-items-center mt-4'>
                    <p>All Posts(32)</p>
                    <p className='les-important'>Article</p>
                    <p className='les-important'>Event</p>
                    <p className='les-important'>Education</p>
                    <p className='les-important'>Job</p>
                </div>
                <div>
                     <button className='btn btn-light me-2 les-important'>Write a Post</button>
                     <button className='btn btn-primary les-important'>Join Group</button>
                     <div class="dropdown more-important">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Filter:All
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#article">Article</a>
                            <a class="dropdown-item" href="#event">Event</a>
                            <a class="dropdown-item" href="#education">Education</a>
                            <a class="dropdown-item" href="#job">Job</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-0' />
            <Content></Content>
        </div>
    );
};

export default Body;