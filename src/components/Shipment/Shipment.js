import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleEmailBlur = event => {
        // console.log(event.target.value);
        setEmail(event.target.value)
    }
    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        // console.log(event.target.value);
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        // console.log(event.target.submit);
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {

        event.preventDefault()

    }
    return (
        <div className='form_Container'>
            <div>
                <h2 className='form_Title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input_Group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required placeholder={user?.email} readOnly />
                    </div>
                    <div className="input_Group">
                        <label htmlFor="text">Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className="input_Group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input_Group">
                        <label htmlFor="number">Phone Number</label>
                        <input onBlur={handlePhoneBlur} required type="number" name="number" id="" required placeholder='+8801' />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='from_Submit' type="submit" value="Add Shipping" />
                </form>
                <button className='google_SignIn'>
                    <img src="google.png" alt="" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Shipment;