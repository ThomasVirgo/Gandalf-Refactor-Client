import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { SocketContext } from "../../context/socket";
import { clearUser } from "../../actions";
import { useDispatch } from 'react-redux'

const Nav = () => {
    const email = localStorage.getItem('email')
    const navigate = useNavigate()
    const socket = useContext(SocketContext)
    const dispatch = useDispatch()

    function logout(){
        localStorage.clear()
        socket.close()
        dispatch(clearUser())
        navigate('/login')
    }

    return (
        <div>
            <p><Link to='/account'>{email}</Link></p>
            <Link to='/chat'>Chat</Link>
            <Link to='/users'>Users</Link>
            <Link to='/game'>Game</Link>
            <a onClick={logout}>Logout</a>
        </div>
    )
}

export default Nav;