import React from 'react';
import './InfoCard.css';
import { UilPen } from "@iconscout/react-unicons";
const InfoCard = () => {
    return (
        <div className='InfoCard'>
            <div className='infoHead'>
                <h4>Your Info</h4>
                <UilPen/>
            </div>
            <div className='info'>
                <span>
                    <b>Email </b>

                </span>
                <span>meheditonmoy917@gmail.com</span>
            </div>
            
            <div className='info'>
                <span>
                    <b>University </b>

                </span>
                <span>Manarat International University</span>
            </div>
            <div className='info'>
                <span>
                    <b>Lives in </b>

                </span>
                <span>Dhaka</span>
            </div>
            <button className='button logout-button'>Log Out</button>
        </div>
    );
};

export default InfoCard;