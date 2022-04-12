import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form_Container'>
            <div>
                <h2 className='form_Title'>Login</h2>
                <form action="">
                    <div className="input_Group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className="input_Group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='from_Submit' type="submit" value="Login" />
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