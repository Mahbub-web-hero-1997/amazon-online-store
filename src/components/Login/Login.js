import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleUserLogIn = event => {
        signInWithEmailAndPassword(email, password)
        event.preventDefault()

    }
    return (
        <div className='form_Container'>
            <div>
                <h2 className='form_Title'>Login</h2>
                <form onSubmit={handleUserLogIn} action="">
                    <div className="input_Group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input_Group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    {
                        loading && <p>loading...</p>
                    }
                    <input className='from_Submit' type="submit" value="Login" required />
                </form>
                <p>New to Ema-Zone?<Link className='form_Link' to='/signup'>Create account</Link></p>
                <button className='google_SignIn'>
                    <img src="google.png" alt="" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;