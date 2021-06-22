import React from 'react';
import { Link } from "react-router-dom";

const CheckOutHeader = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light mb-3">
            <div className="container">
                <Link className="navbar-brand brand-logo" to="/home">GROCERY STORE</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'black' }} to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'black' }} to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'black' }} to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'black' }} to="/deals">Deals</Link>
                        </li>
                        <Link to="/login"><button className="btn btn-danger" style={{ marginTop: '5px' }}>Login</button></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default CheckOutHeader;