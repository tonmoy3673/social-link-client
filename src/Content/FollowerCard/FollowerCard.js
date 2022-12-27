import React from 'react';
import { Followers } from '../../Data/FollowerData';
import './FollowerCard.css';
const FollowerCard = () => {
    return (
        <div className='FollowerCard'>
            <h3>Who is following you</h3>
            {
                Followers.map((follower,id)=>{
                    return(
                        <div className='follower'>
                           <img src={follower.img} alt='' className='followerImage'/>
                           <div className='name'>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                           </div>
                           <button className='button fc-button'>
                            Follow
                           </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default FollowerCard;