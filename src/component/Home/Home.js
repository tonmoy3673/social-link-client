import React from 'react';
import PostSide from '../../Content/PostSide/PostSide';
import ProfileSide from '../../Content/ProfileSide/ProfileSide';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide/>
            <PostSide/>
            <div className="RightSide">RightSide</div>
        </div>
    );
};

export default Home;