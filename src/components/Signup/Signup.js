import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UseTitle from '../useTitle/UseTitle';


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()
    const handleEmailBlur = event => {
        // console.log(event.target.value);
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        // console.log(event.target.value);
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        // console.log(event.target.submit);
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {

        if (password !== confirmPassword) {
            setError('Your Given Password Did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters of longer')
        }

        createUserWithEmailAndPassword(email, password)
        event.preventDefault()

    }

    return (
        <div className='form_Container'>
            <UseTitle title="signup"></UseTitle>
            <div>
                <h2 className='form_Title'>Signup</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input_Group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input_Group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input_Group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='from_Submit' type="submit" value="Register" />
                </form>
                <p>Already have an account?<Link className='form_Link' to='/login'>SignIn</Link></p>
                <button className='google_SignIn'>
                    <img src="google.png" alt="" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Signup;