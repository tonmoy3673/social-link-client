import React from 'react';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import './Post.css'

const Post = ({data}) => {
    return (
        <div className='Post'>
            <img src={data.img} alt='postImage'/>
            <div className='postReact'>
            <img src={data.liked?Heart: NotLike} alt="postImage" />
            <img src={Comment} alt="postImage" />
            <img src={Share} alt="postImage" />
            </div>
            <span>{data.likes} Likes</span>
            <div className='detail'>
                <span><strong>{data.name}</strong></span>
                <span> {data.desc} <button className='button ps-button'>Details</button></span>
            </div>
        </div>
    );
};

export default Post;