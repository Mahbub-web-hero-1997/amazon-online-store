import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Card/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop_Container'>

            <div className="review_Product_Container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart_Container">
                <Cart cart={cart}>
                    <Link to='#'><button>Prosed Checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;