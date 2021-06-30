import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div className='card'>
            <div className="head">
                <div className="head-left">{props.header}</div>
                <div className="head-right">{props.buttons}</div>
            </div>
            <div className="body">
                <div className="body-left">{props.body}</div>
                <div className="body-right">{props.links}</div>
            </div>
        </div>)
}
export default Card;