import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../Card';
import Navigation from '../Navigation';
import React, { useState } from 'react';

export default function Login()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        sessionStorage.setItem("token", 'example token');
        console.log('email: ' + email);
        console.log('password: ' + password);
        navigate(-1);
    }
    return (<>
    <Navigation/>
    <Card className='login-page'>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type='email' onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <Link className='login-leave' to ='/ForgotPassword'>
                Forgot password?
            </Link>
            <div className='login-btn'>
                <button type='submit'>Login</button>
            </div>
        </form>   
        <Link className='login-leave' to ='/Signup'>
            Don't have an account?
        </Link>
    </Card>
    </>);
}
