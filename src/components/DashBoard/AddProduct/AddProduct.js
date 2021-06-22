import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState('');

    const onSubmit = data => {
        const addData = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imgURL: imgURL
        }


        if (addData.imgURL === '') {
            alert('data is empty');
            //console.log(addData.imgURL)
        } else {
            const url = `http://localhost:5000/addProduct`;
            fetch(url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(addData)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert('product added successfully');
                    }
                })
        }

    };



    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c3592989c756e575a1b9f7147ab71ade');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div>
            <Sidebar></Sidebar>
            <div className="container">
                <h1 style={{ marginTop: '25px', fontWeight: 'bold' }}>Add Product</h1>
                <div className="py-5">
                    <div className="row">
                        <div className="col-md-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="inputProductName">Product name</label>
                                        <input type="text" name="name" className="form-control" id="inputProductName" placeholder="Product name" ref={register} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="inputAddPrice">Add price</label>
                                        <input type="text" name="price" className="form-control" id="inputAddPrice" placeholder="Add price" ref={register} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="weight">Quantity</label>
                                        <input type="text" name="quantity" className="form-control" id="weight" placeholder="Quantity" ref={register} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="addPhoto">Add photo</label>
                                        <input type="file" className="form-control" id="addPhoto" onChange={handleImageUpload} />
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-primary px-4 float-right" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;