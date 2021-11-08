import React, { useEffect, useContext } from "react";
import { Nav } from "../../layout";
import { useNavigate } from 'react-router-dom'
import { SocketContext } from "../../context/socket";
import { useSelector, useDispatch } from 'react-redux'
import { initActiveUsers } from "../../actions";

const Dashboard = () => {
    const navigate = useNavigate()
    const socket = useContext(SocketContext)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        const dispatchActiveUsers = (users) => {
            dispatch(initActiveUsers(users))
        }
        socket.on('users', dispatchActiveUsers)

        return () => {
            socket.off('users', dispatchActiveUsers);
        }
    }, [socket, dispatch, navigate])


    useEffect(()=>{
        if (!user.email || !user.token){
            localStorage.clear()
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
        <Nav></Nav>
        <div>Welcome to the dashboard</div>
        </>
    )
}

export default Dashboard;