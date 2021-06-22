import React from 'react';
import './ManageProduct.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //console.log(products)

    const deleteProduct = () => {
        console.log('delete product hit')
    }


    return (
        <div>
            <Sidebar></Sidebar>
            <div className="container">
                <h2 style={{ marginTop: '25px', fontWeight: 'bold' }}>Manage Product </h2>

                <table className="table table-borderless">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.price}</td>
                                        <td className="update"><FontAwesomeIcon className="edit" icon={faEdit} /><FontAwesomeIcon className="delete" onClick={deleteProduct} icon={faTrashAlt} />
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }

                </table>

            </div>
        </div>
    );
};

export default ManageProduct;