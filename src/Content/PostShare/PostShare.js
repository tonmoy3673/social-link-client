import React from 'react';
import profileImg from '../../img/profileImg.jpg';
import './PostShare.css'

const PostShare = () => {
    return (
        <div className='PostShare'>
            <img src={profileImg} alt='profileImg'/>
            <div>
                <input type='text' placeholder="What's on your mind" />
            </div>
            <div className='postOption'>
                    
            </div>
        </div>
        
    );
};

export default PostShare;