import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { routingValue } from "../../redux/actions/actions";
import "./Header.css"





const Header = () => {
    
    const dispatch = useDispatch();
    const [domView, setDomView] = useState('/Add_user')

   
    useEffect(() => {
        dispatch(routingValue(domView))
    }, [domView]);

    return (
        <div className='Header'>
            <div className='container'>
            <button id='/Add_user' className='Button' onClick={(e) => setDomView(e.target.id)}>Add user</button>
            <button id='/All_users' className='Button' onClick={(e) => setDomView(e.target.id)}>All users</button>
            </div>
        </div>
    )
}

export default Header
