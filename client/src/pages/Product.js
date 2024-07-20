import "../assets/css/product.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "../component/Product_details";
import Addtocart from "./Addtocart";
import { Link } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);



    const fetchProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/getproduct`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className='product'>

            <div className='parent_card'>
                {products.map((item) => (
                    <ProductDetails props={item} {...item} />
                ))}
            </div>
        </div>
    );
}

export default Product;
