import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, clickHandler } = props;
    const { name, price, ratings, img, category } = product;
    return (
        <div className='single-product'>

            <div className="product-info">
                <img src={img} alt="" />
                <h4 className='product-name'>{name}</h4>
                <h4 className='product-name'>Price: ${price}</h4>
                <p>Category: {category}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => clickHandler(product)} className='cart-btn'>
                <p>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;