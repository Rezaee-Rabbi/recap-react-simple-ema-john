import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const clickHandler = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='product-container'>
            <div className="products-area">
                {
                    products.map(product => <Product product={product} key={product.id} clickHandler={clickHandler}></Product>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-area">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;