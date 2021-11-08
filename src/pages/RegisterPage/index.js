import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { requestRegister, requestLogin } from "../../requests";

const RegisterPage = () => {
    const [userData, setUserData] = useState({
        "first_name": "",
        "last_name": "",
        "username": "", 
        "email": "",
        "password": "",
        "confirm_password":""
    })

    const [error, setError] = useState(false)
    const navigate = useNavigate()

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
            "first_name": "",
            "last_name": "",
            "username": "", 
            "email": "",
            "password": "",
            "confirm_password":""
        })
        let data = {
            "first_name": userData.first_name,
            "last_name": userData.last_name,
            "email": userData.email,
            "username": userData.email,
            "game_name": userData.username,
            "password": userData.password,
            "password_confirmation": userData.confirm_password
        }
        let [success, response] = await requestRegister(data)
        if (success){
            console.log(response);
            let [successLogin, loginResponse] = await requestLogin({
                "username": userData.email,
                "password": userData.password
            })
            localStorage.setItem('email', userData.email)
            localStorage.setItem('token', loginResponse.token )
            navigate('/dashboard'); 
        } else {
            setError(true); 
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='First Name...' value={userData['first_name']} onChange={handleChange} name='first_name' required/>
                <input type="text" placeholder='Last Name...' value={userData['last_name']} onChange={handleChange} name='last_name' required/>
                <input type="text" placeholder='In Game Name' value={userData['username']} onChange={handleChange} name='username'required/>
                <input type="email" placeholder='Email' value={userData['email']} onChange={handleChange} name='email' required/>
                <input type="password" placeholder='Password' value={userData['password']} onChange={handleChange} name='password' required/>
                <input type="password" placeholder='Confirm Password' value={userData['confirm_password']} onChange={handleChange} name='confirm_password' required/>
                <input type="submit" value='Register' />
            </form>
            <p>Already have an account? <Link to='/login'>Login here</Link></p>
            {error && <p>Registration was unsuccessful, please try again</p>}
        </div>
    )
}

export default RegisterPage