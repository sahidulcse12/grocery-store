import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css';
import { useState } from "react";
import CheckOutHeader from "./CheckOutHeader";

const CheckOut = () => {

    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [id])
    console.log(id);

    const handleOrder = () => { }




    return (
        <div>
            <CheckOutHeader></CheckOutHeader>

            <div className="container">
                <h2 style={{ marginTop: '25px', fontWeight: 'bold', color: 'blueviolet' }}>Checkout</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{singleProduct.name}</td>
                            <td>{singleProduct.quantity}</td>
                            <td>${singleProduct.price}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/orders">
                    <button onClick={() => handleOrder()} className="btn btn-info">Check Out</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckOut;