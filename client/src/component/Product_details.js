import React, { useContext } from 'react';
import Higher from './Higher';
import { Cartcontext } from "../pages/CartProvider"

const ProductDetails = ({ props, hoc }) => {
    const { cart, setcart } = useContext(Cartcontext)

    const addtocart = () => {
        setcart([...cart, props])
        window.scrollTo({ top: 0.5, behavior: "smooth" });

    }
    return (
        <div className='child_card' key={props.id}>
            <div className='card_img'>
                <div className='offer'
                    style={hoc.style}>
                    {props.offer}% OFF
                </div>

                <div className='offers'
                    style={hoc.newproduct}>
                    {props.new_product} Product
                </div>


                <img src={props.img} alt='hy' />
            </div>

            <div className='card'>
                <div className='card_title'>
                    <p>{props.title}</p>
                </div>

                <div className='card_price'>
                    <p>{props.price}$</p>
                </div>

                <div className='card_desc'>
                    <p>{props.short_desc}</p>
                </div>

                <button className='card_button' onClick={addtocart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Higher(ProductDetails);
