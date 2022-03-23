import React, { useEffect, useState } from 'react';
import Cart from '../Card/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (

        <div className='shop_Container'>
            {/* Product Aria */}

            <div className='products_Container'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            {/* Cart Arid */}
            <div className='card_Container'>
                <Cart
                    cart={cart.length}></Cart>
            </div>
        </div>
    );
};

export default Shop;