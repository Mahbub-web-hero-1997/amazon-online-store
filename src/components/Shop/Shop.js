import React, { useEffect, useState } from 'react';
import { addToDb, storedCart } from '../../utilities/fakedb';
import Cart from '../Card/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);

    useEffect(() => {
        const getStoredCart = storedCart();

        const savedCart = []
        for (const id in getStoredCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = getStoredCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    }, [products])

    // const handleAddToCart = (product) => {
    //     const newCart = [...cart, product];
    //     setCart(newCart)
    //     addToDb(product.id)
    // }
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;