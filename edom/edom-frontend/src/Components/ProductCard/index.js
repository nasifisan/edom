import React, {useState, useEffect} from 'react'

import './styles.css'

const Product = ({carTitle, cardText, image}) => {  
    return (
        <div class="card" style={{ width: '18rem', backgroundColor: 'grey', borderRadius: '15px' }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{carTitle}</h5>
                <p class="card-text">{cardText}</p>
                <a href="#" class="btn btn-primary">Click to buy</a>
            </div>
        </div>
    );
}

export default Product;
