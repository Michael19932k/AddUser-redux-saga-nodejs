import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

function CustomRouting(props) {
    const [pathname, setPathname] = useState(window.location.pathname)
    const [route, setRoute] = useState(null)
    const urlRoute = useSelector((state) => window.history.pushState(null, null, state.store.route));

    useEffect(() => {
        //handles routing when user enters url manually
        if (window.location.pathname === '/Add_user' || window.location.pathname === '/All_users') {
            setRoute(pathname)
        }
    }, [pathname])


    return (
        <>
            {props.children}
        </>
    );
}

export default CustomRouting;
