import React from 'react';
import './Card.css';

function Card({title, imageUrl, body, Url}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt="model S"/>
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="btn">
                <button>
                <a href={Url} alt=" ">view more</a>
                </button>
            </div>
        </div>
    )
}

export default Card
