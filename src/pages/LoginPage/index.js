import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { requestLogin } from "../../requests";
import { SocketContext } from "../../context/socket";
import { useDispatch } from 'react-redux'
import { initUser } from "../../actions";

const LoginPage = () => {
    const [userData, setUserData] = useState({
        "email": "",
        "password": ""
    })
    const socket = useContext(SocketContext);
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    function handleChange (event){
        let newData = {...userData}
        newData[event.target.name] = event.target.value
        setUserData(newData)
        setError(false)
    }

    async function handleSubmit (event){
        event.preventDefault()
        console.log(userData);
        setUserData({
            "email": "",
            "password": ""
        })
        let data = {
            "username": userData.email,
            "password": userData.password
        }
        const [success, response] = await requestLogin(data)
        if (success){
            localStorage.setItem('token', response.token); 
            localStorage.setItem('email', userData.email);
            socket.auth = { username: userData.email };
            socket.connect()
            dispatch(initUser({email: userData.email, token: response.token}))
            navigate('/dashboard'); 
        } else {
            setError(true); 
        }
        
        console.log(response);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' value={userData['email']} onChange={handleChange} name='email'/>
                <input type="password" placeholder='Password' value={userData['password']} onChange={handleChange} name='password'/>
                <input type="submit" value='Login'/>
            </form>
            <p>Don't have an account? <Link to='/register'>Register here</Link></p>
            {error && <p>Login was unsuccessful, please try again</p>}
        </div>
    )
}

export default LoginPage