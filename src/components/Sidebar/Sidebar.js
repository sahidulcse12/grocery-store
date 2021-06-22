import { Link } from 'react-router-dom';
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlusCircle, faTh } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light mb-3">
                <div className="container">
                    <Link className="navbar-brand brand-logo" to="/home">GROCERY STORE</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'gray' }} to="/manageProduct"><FontAwesomeIcon icon={faTh} /> Manage Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'gray' }} to="/addProduct"><FontAwesomeIcon icon={faPlusCircle} />Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'gray' }} to="/editProduct"><FontAwesomeIcon icon={faPen} />Edit Product</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Sidebar;