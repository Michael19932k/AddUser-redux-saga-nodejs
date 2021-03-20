import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/actions";
import sortUsers from "./SortingLogic";
import "./UserList.css"


const UserList = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.store.users);
    const [usersSorted, setUsersSorted] = useState([users]);

    useEffect(() => {
        dispatch(getUsers())
    }, []);


    return (
            <table className="minimalistBlack">
                <thead className="thead-dark">
                    <tr>
                        <th onClick={() => sortUsers("userName", users, setUsersSorted)}>Name</th>
                        <th onClick={() => sortUsers("email", users, setUsersSorted)}>Email</th>
                        <th onClick={() => sortUsers("age", users, setUsersSorted)}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user, i) => {
                        const { userName, email, age } = user;
                        return (
                            <tr key={i}>
                                <td>{userName}</td>
                                <td>{email}</td>
                                <td>{age}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    );




}
export default UserList