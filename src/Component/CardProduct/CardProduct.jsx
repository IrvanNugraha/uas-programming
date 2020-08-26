import React from 'react';
import './CardProduct.css';




const CardProduct = (props) =>{
    return(
        <a href="./cont">
            <div className="card">
                <div className="img-thumb">
                    <img src={props.image} alt=""/>
                </div>
                <div className="statement">
                    <p className="title-thumb">{props.title}</p>
                    <p className="desc-thumb">{props.desc}</p>
                    <p className="price">{props.price}</p>
                </div>
            </div>
        </a>
    );
}

export default CardProduct;