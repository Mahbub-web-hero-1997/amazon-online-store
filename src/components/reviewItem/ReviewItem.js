import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review_Item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviewItem_Details_Container">
                <div className="reviewItem_Details">
                    <p className="product_Name" title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>price : <span className='orange'> ${price}</span></p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>quantity: {quantity}</small></p>
                </div>
                <div className="delete_Container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete_Btn'><FontAwesomeIcon className='delet_Icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;