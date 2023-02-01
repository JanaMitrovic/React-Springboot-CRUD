import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CustomersComponent() {

  const [customers, setCustomers] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    loadCustomers();
  },[]);

  const loadCustomers = async () => {
    const result = await axios.get("http://localhost:8080/customers");
    setCustomers(result.data);
  }

  const deleteCustomer = async (id) => {
    await axios.delete(`http://localhost:8080/customer/${id}`)
    loadCustomers()
  }

  return (
            <div>
                <br />
                <h2 className='text-center'>Customers</h2>
                <br />
                <div className='container'>
                    <table className='table table-striped table-bordered shadow'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>EMAIL</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((customer, index) => (
                                    <tr key={customer.id}>
                                        <th key={index}>{index+1}</th>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.email}</td>
                                        <td>
                                            <Link className='btn btn-primary mx-2' to={`/customer/${customer.id}`}>View</Link>
                                            <Link className='btn btn-outline-primary mx-2' to={`/edit-customer/${customer.id}`}>Edit</Link>
                                            <button className='btn btn-danger mx-2' onClick={() => deleteCustomer(customer.id)}>Delete</button>
                                        </td>
                                    </tr> 
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
  )
}
