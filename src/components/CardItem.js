import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className="card-item">
                <Link className="cards-item-link" to={props.path}>
                    <div className="card-item-info">
                        <h5 className="card-item-text"><props className="text"></props></h5>
                    </div>
                    <figure className="card-item-wrap" data-category={props.label}>
                        <img src={props.src} alt="Project image" className="card-item-image"/>
                    </figure>
                    
                </Link>
            </li>
        </>
    )
}

export default CardItem
