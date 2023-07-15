import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nagivation(props)
{
    const [loggedIn, setLoggedInState] = useState(sessionStorage.getItem("token") != null);

    // Temporary login toggle
    // TODO: Implement token check or something.
    function toggleLoggedInState() {
        if(sessionStorage.getItem("token") != null) {
            logOut();
        } else {
            sessionStorage.setItem("token", 'example token');
        }
        setLoggedInState(!loggedIn);
    }

    function logOut() {
        sessionStorage.removeItem("token");
        setLoggedInState(false);
    }

    return (<>
    <button onClick={toggleLoggedInState}>Switch Logged In State</button>
    <div className='nav-bar'>
        <p className='home-button'>
            <Link className='nav-link' to='/'>Home</Link>
        </p>
        <ul>
            <li key='shop'>
                <Link className='nav-link' to='/Shop'>Shop</Link>
            </li>
            <li className='cart' key='cart'>
                <Link className='nav-link' to='/Cart'>Cart</Link>
                <span className='cart-count'>{props.cart || 0}</span>
            </li>

            {(loggedIn) ? 
                <>
                <li key='account'>
                    <Link className='nav-link' to='/Account'>Account</Link>
                </li>
                <li key='logout'>
                    <button className='nav-button' onClick={logOut}>Logout</button>
                </li>
                </>    
                :
                <>
                <li key='login'>
                    <Link className='nav-link' to='/Login'>Login</Link>
                </li>
                <li key='signup'>
                    <Link className='nav-link' to='/Signup'>Signup</Link>
                </li>
                </>
            }
        </ul>
    </div>
    <div className='banner'>
        <h1>Bookstore</h1>
    </div>
    </>);
}
