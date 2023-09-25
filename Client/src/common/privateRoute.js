import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Login from '../login';

export function PrivateRoute({children}) {
    const [authenticate , setAuthenticate] = useState(false)
    const userAuthenticate = useSelector((state)=>state.userValue);
    const authentication = window.localStorage.getItem("login");
    const navigate = useNavigate();
    useEffect(()=>{
        if(!authentication){
        navigate("/");
        }
    },[authenticate]);
    return children
}  

  