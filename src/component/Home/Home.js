import React from 'react';
import PostSide from '../../Content/PostSide/PostSide';
import ProfileSide from '../../Content/ProfileSide/ProfileSide';
import RightSide from '../../Content/RightSide/RightSide';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
            
        </div>
    );
};

export default Home;