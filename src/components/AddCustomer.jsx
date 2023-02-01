import axios from 'axios';
import React, { Component } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddCustomer() {

        let navigate = useNavigate()

        const [customer, setCustomer] = useState({
            firstName: "",
            lastName: "",
            email: ""
        })

        const{firstName, lastName, email} = customer

        const onInputChange = (event) => {
            setCustomer({...customer, [event.target.name] : event.target.value})
        }

        const onSubmit = async (event) => {
            event.preventDefault();
            await axios.post("http://localhost:8080/customers", customer);
            navigate("/");
        }

        return (
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
                            <h3 className='text-center'>Add new customer</h3>
                            <div className='card-body'>
                                <form onSubmit={(event) => onSubmit(event)}>
                                    <div className='mb-3'>
                                        <label htmlFor='firstName'> First name: </label>
                                        <input 
                                        type={"text"} 
                                        placeholder='Fist name' 
                                        name='firstName' 
                                        className='form-control'
                                        value={firstName}
                                        onChange={(event) => onInputChange(event)}/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='lastName'> Last name: </label>
                                        <input 
                                        type={"text"} 
                                        placeholder='Last name' 
                                        name='lastName' 
                                        className='form-control'
                                        value={lastName}
                                        onChange={(event) => onInputChange(event)}/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='email'> Email: </label>
                                        <input 
                                        type={"text"} 
                                        placeholder='Email' 
                                        name='email' 
                                        className='form-control'
                                        value={email}
                                        onChange={(event) => onInputChange(event)}/>
                                    </div>

                                    <button type='submit' className='btn btn-success'>Submit</button>
                                    <Link className='btn btn-danger' to={"/"} style = {{marginLeft: "10px"}}>Cancel</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
}