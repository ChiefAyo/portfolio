import React from 'react';
import { Link } from 'react-router-dom';
import './InfoCards.css'

function CardItem(props) {
    return (
        <>
            <li className="card-item">
                <a className="card-item-link" href={props.path}>
                    <figure className="card-item-wrap" data-category={props.label}>
                        <img src={props.src} alt={props.text} className="card-item-image"/>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">{props.text}</h5>
                    </div>
                    {props.type === 'project' &&
                        <div className = "card-item-technologies">
                            {props.technologies}
                        </div>
                    }
                </a>
            </li>
        </>
    )
}

export default CardItem
