import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // if button has a style, set it to it, otherwise use a default style
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    // same for button, default to first button if no size is chosen
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <Link to='/' className='btn-mobile'>
            {/* Text for button given in 'children' */}
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type={type}>
                
                {children}
            </button>
        </Link>
    )
}