import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'





const Navbar = () => {

    const state = useSelector((state) => state.handleCart)

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-white  py-3 shadow-sm" id='continernav'>
                <div className='container' id='contnav'>
                    <NavLink className="navbar-brand font-weight-bold col-4" to="/">LA COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse   col-6" id="navbarSupportedContent">
                        <ul className="navbar-nav w-75 mr-auto d-flex justify-content-between">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="buttons col-4" id='buttons'>
                    <NavLink to="/login" className="btn border btn-outline-dark ">
                        <i className='fa fa-sign-in mr-2'></i> Login</NavLink>
                    <NavLink to="/register" className="btn border ml-3 btn-outline-dark ">
                        <i className='fa fa-user-plus mr-2'></i> Register</NavLink>
                    <NavLink to="/cart" className="btn border ml-3 btn-outline-dark ">
                        <i className='fa fa-shopping-cart mr-2'></i> Cart ({state.length})</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
