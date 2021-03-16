import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
    return (
        <>
            <li className="card-item">
                <Link className="cards-item-link">
                    <div className="card-item-info">
                        <h5 className="card-item-text"></h5>
                    </div>
                    <figure className="card-item-wrap">
                        <img src="/" alt="Project image" className="card-item-image"/>
                    </figure>

                </Link>
            </li>
        </>
    )
}

export default CardItem
