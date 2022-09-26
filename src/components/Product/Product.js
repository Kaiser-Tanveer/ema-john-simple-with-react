import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {cardHandler, product} = props;
    const {img, seller, name, price, ratings} = props.product;
    
    return (
        <div className='product'>
            {img ? <img src={img} alt="" /> : 'No image Found!!!'}
            <div className="product-info">
            <h2>{name.slice(0,10)}</h2>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=> cardHandler(product)} className='card-btn'><span>Add to Cart</span> <span>            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Product;