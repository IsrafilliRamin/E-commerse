import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.css"
import { addCart,minCart,delCart } from '../redux/action'
const Cart = () => {
    const products = useSelector((state) => state.handleCart)

    const dispatch = useDispatch();

    const addProduct = (product)=>{
        dispatch(addCart(product))
    };
    const minusProduct = (product)=>{
        dispatch(minCart(product))
    };
    const deletProduct = (product)=>{
        dispatch(delCart(product))
    };



   
    return (
        <div className='container d-flex flex-wrap '>

            {products.map((product,index) => {

              return  <div key={index} className="row" id='cart'>

                    <div className="col-md-6">

                        <img src={product.image} alt={product.title}
                            height="200px" width="180px"  />
                    </div>
                    <div className="col-md-4 ml-6 mx-5">
                        <h3>{product.title}</h3>
                        <p className="lead_fw-bold">
                            {product.qty} X ${product.price} = $
                            {product.qty * product.price}
                        </p>
                        <button className="btn btn-outline-dark me-4"
                            onClick={()=>deletProduct(product)}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <button className="btn btn-outline-dark"
                            onClick={()=>addProduct(product)}>
                            <i className=" fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            }

            )}

        </div>
    )
}

export default Cart
