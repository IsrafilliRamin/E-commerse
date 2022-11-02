import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);


    const Loading = () => {
        return (
            <>
             <div className="col-md-3">
                <Skeleton height={350} /> 
             </div>
            </>
        )
    }

    const filterProduct = (cat)=>{
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList)
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className="btn btn-outline-dark border" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark border ml-5" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark border ml-5" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark border ml-5" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark border ml-5" onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
                <div className='cont'>
                {filter?.map((product,index) => (
                            <div key={index} className="col-md-3 mt-5">
                                <div className="col-md-12 mt-10 mb-10">
                                    <div className="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} className="card-img-top" alt=
                                            {product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,
                                                12)}</h5>
                                            <p className="card-text">
                                                ${product.price}
                                            </p>
                                            <NavLink to={`products/${product.id}`} className="btn btn-primary">
                                               Buy Now
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                ))}
                </div>
              
            </>
        );
    };






    return (
        <div>
            <div className="container  my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
