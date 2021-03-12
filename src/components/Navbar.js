import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Buttons';
import './Navbar.css'

function Navbar() {
    // set the state for the click function
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)


    //switches between clicked and not cliked by reversing the value of the state
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    //displays button based on screensize

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    // prevents button from reappearing when page refreshed
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        AAO
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    {/* toggle nav menu between being visible and not */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/music' className='nav-links' onClick={closeMobileMenu}>
                                Music
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/posts' className='nav-links' onClick={closeMobileMenu}>
                                Posts
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Test Button</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
