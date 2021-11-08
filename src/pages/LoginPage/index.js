import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { requestLogin } from "../../requests";

const LoginPage = () => {
    const [userData, setUserData] = useState({
        "email": "",
        "password": ""
    })

    function handleChange (event){
        let newData = {...userData}
        newData[event.target.name] = event.target.value
        setUserData(newData)
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
        const response = await requestLogin(data)
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
        </div>
    )
}

export default LoginPage