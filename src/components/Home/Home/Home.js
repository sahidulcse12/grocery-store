import React, { useEffect } from 'react';
import { useState } from 'react';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])



    const clickHandle = (id) => {
        history.push(`/checkOut/${id}`)
        console.log(id)
    }




    return (
        <div>
            <div className="input-group search-option">
                <input type="text" className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                    <button type="button" className="btn btn-secondary">Search</button>
                </div>
            </div>
            <div className="row py-5 container-fluid">
                {
                    products.map(pd => {
                        return (

                            <div className="col-md-4 p-5 text-center items">
                                <img height="200px" width="auto" src={pd.imgURL} alt="" />
                                <h2>{pd.name}</h2>
                                <p>${pd.price}</p>
                                <Link to="/checkOut" onClick={() => clickHandle(pd._id)} className="btn btn-danger ml-5">Buy Now  <FontAwesomeIcon icon={faArrowRight} /></Link>

                            </div>



                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;