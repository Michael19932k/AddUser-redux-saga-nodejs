import React, { useEffect, useState } from 'react';
import useForm from "./FormValidation";
import validate from './LoginFormValidationRules';
import { useSelector } from "react-redux";
import "./AddUserForm.css"

const AddUserForm = () => {
    const message = useSelector((state) => state.store.message);
    
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(validate);


    return (
       
            <form className="Form" onSubmit={handleSubmit} noValidate>
                <div className="fieldContainer">
                    <label className="label">User name</label>
                    <div className="inputWrapper">
                        <input className={`input ${errors.userName && ''}`} type="userName" name="userName" onChange={handleChange} value={values.userName || ''} required />
                    </div>
                    {errors.userName && (
                        <span className="help">{errors.userName}</span>
                    )}
                </div>
                <div className="fieldContainer">
                    <label className="label">Email Address</label>
                    <div className="inputWrapper">
                        <input autoComplete="off" className={`input ${errors.email && ''}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                        {errors.email && (
                            <span className="help ">{errors.email}</span>
                        )}
                    </div>
                </div>
                <div className="fieldContainer">
                    <label className="label">Age</label>
                    <div className="inputWrapper">
                        <input autoComplete="off" className={`input ${errors.age && ''}`} type="age" name="age" onChange={handleChange} value={values.age || ''} required />
                        {errors.age && (
                            <span className="help ">{errors.age}</span>
                        )}
                    </div>
                </div>
                <button type="submit" className="Button">Add user</button>
                {message && (
                    <span className="help ">{message}</span>
                )}
            </form>
    );
};

export default AddUserForm;

