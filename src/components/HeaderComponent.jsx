import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {

        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className='container-fluid'>
                            <Link className='navbar-brand' to={"/"}> Customer management system</Link>
                            <Link className='btn btn-outline-light' to={"/add-customer"}>Add new customer</Link>
                        </div>
                    </nav>
                </header>
            </div>
        );
}