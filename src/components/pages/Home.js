import React from 'react'
import '../../App.css'
import './Home.css'
import '../CardItem.js'
import CardItem from '../CardItem.js'
import { SocialIcon } from 'react-social-icons';

// hero section here if we want one

//TODO image not showing up for project card
function Home() {
    return (
        <>
        <div className='main-info-container'>
            <h2 className='intro-line'>I guess this is my website... My name is <span className='my-name'>Ayo Olagbaiye</span></h2>
            <h3 className='about-heading'>About me: </h3>
            <div className='my-description'>A Computer Science student, striving to learn and understand as much as possible
                in an infinitely ever changing world of technology. Let us explore together <span className= 'smile'>:)</span>.
                <h1>THIS IS A WORK IN PROGRESS</h1>
            </div>

            <div className='socials-section'>
                <h3 className='socials-label'>You can find me here:</h3>
                <ul className='relevant-links'>
                    <li>Twitter: <SocialIcon url="https://twitter.com/ayo_olagbaiye" bgColor="#000000" fgColor="rgb(117, 114, 114)" style={{ height: 25, width: 25}}/></li>
                    <li>GitHub: <SocialIcon url="https://github.com/ChiefAyo" bgColor="#000000" fgColor="rgb(117, 114, 114)" style={{ height: 25, width: 25}}/></li>
                    <li>LinkedIn: <SocialIcon url="https://www.linkedin.com/in/ayoolagbaiye/" bgColor="#000000" fgColor="rgb(117, 114, 114)" style={{ height: 25, width: 25}}/></li>
                </ul>
            </div>

            <div className="card-container">
                <ul className="card-list">
                    <CardItem
                    src="resources/images/portfolio-preview.jpg"
                    text='Portfolio - GitHub project files for this portfolio'
                    label='Javascript (React.js)'
                    path='https://github.com/ChiefAyo/portfolio'
                    technologies='JavaScript, React.js'
                    />     
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Home;
