import React from 'react';
import './Card.css';

function Card({title, imageUrl, body, Url}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img className="card-image" src={imageUrl} alt="images"/>
            </div>
            <div className="card-title">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <p className="project-text">{body}</p>
            </div>
            <div className="btn">
                <button>
                <a href={Url} alt="project Url">view more</a>
                </button>
            </div>
        </div>
    )
}

export default Card
