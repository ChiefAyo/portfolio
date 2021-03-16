import React from 'react'
import '../../App.css'
import './Home.css'
// hero section here if we want one

function Home() {
    return (
        <>
        <div className='main-info-container'>
            <h1 className='intro-line'>I guess this is my website... My name is <span className='my-name'>Ayo Olagbaiye</span></h1>
            <h3 className='about-heading'>About me: </h3>
            <div className='my-description'>A Computer Science student, striving to learn and understand as much as possible
                in an infinitely ever changing world of technology. Let us explore together <span className= 'smile'>:)</span>.
            </div>

            <h3>You can find me here:</h3>
            <ul className='relevant-links'>
                <li>Twitter</li>
                <li>GitHub</li>
            </ul>
        </div>
        </>
    )
}

export default Home;
