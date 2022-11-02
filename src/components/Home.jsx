import React from 'react'
import imge from '../assets/841317098.jpg'
import Products from './Products'
const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img className="card-img" src={imge} alt="Card image" height="675px" />
                <div className="container">
                    <div className="card-img-overlay d-flex flex-column  align-items-center z-1">
                        <h5 className="card-title display-3 fw-bolder">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHEACK OUT ALL THE TRENDS</p>
                    </div>
                </div>

            </div>
            <Products/>
        </div>
    )
}

export default Home
