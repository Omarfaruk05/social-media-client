import React from 'react';
import Content from '../Content/Content';

const Body = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center mt-4 '>
                <div className='d-flex gap-3 align-items-center mt-4'>
                    <p>All Posts(32)</p>
                    <p>Article</p>
                    <p>Event</p>
                    <p>Education</p>
                    <p>Job</p>
                </div>
                <div>
                     <button className='btn btn-light me-2'>Write a Post</button>
                     <button className='btn btn-primary'>Join Group</button>
                </div>
            </div>
            <hr className='mt-0' />
            <Content></Content>
        </div>
    );
};

export default Body;