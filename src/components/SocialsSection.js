import React from 'react';
import { Link } from 'react-router-dom';
import './SocialsSection.css';
import { SocialIcon } from 'react-social-icons';

function SocialsSection() {
    

    return (
        <>
            <div className='socials-section'>
                <h3 className='socials-label'>Socials:</h3>
                <ul className='relevant-links'>
                    <SocialIcon className='social-icons' url="https://twitter.com/ayo_olagbaiye" bgColor="#000000" fgColor="rgb(117, 114, 114)" style={{ height: 60, width: 60}}/>
                    <SocialIcon className='social-icons' url="https://github.com/ChiefAyo" bgColor="#000000" fgColor="rgb(117, 114, 114)" style={{ height: 60, width: 60}}/>
                    <SocialIcon className='social-icons' url="https://www.linkedin.com/in/ayoolagbaiye/" bgColor="#000000" fgColor="rgb(117, 114, 114)" style={{ height: 60, width: 60}}/>
                </ul>
            </div>
        </>
    )
}

export default SocialsSection