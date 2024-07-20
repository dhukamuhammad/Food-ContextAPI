import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddToCart from '../pages/Addtocart'
import Product from '../pages/Product'
import Navbar from '../component/Navbar'

const Addtofile_route = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <>
                        <Navbar />
                        <Product />
                    </>
                } />
                <Route path='/addtocart' element={
                    <>
                        <Navbar />
                        <AddToCart />
                    </>
                } />

            </Routes>

        </div>
    )
}

export default Addtofile_route
