import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewCustomer() {

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const {id} = useParams()

    useEffect(() => {
        loadCustomer()
    },[])

    const loadCustomer = async () => {
        const result = await axios.get(`http://localhost:8080/customer/${id}`);
        setCustomer(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
                    <h3 className='text-center'>Customer details</h3>

                    <div className='card'>
                        <div className='card-header'>
                            Details of customer id:
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>First name: </b>
                                    {customer.firstName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Last name: </b>
                                    {customer.lastName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email name: </b>
                                    {customer.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-danger mt-3' to={"/"} style = {{width : "120px"}}>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewCustomer