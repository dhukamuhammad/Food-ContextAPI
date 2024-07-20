import React, { useContext } from 'react';
import { Cartcontext } from './CartProvider';
import "../assets/css/addtocard.css";

const AddToCart = () => {
    const { cart, setcart } = useContext(Cartcontext);

    const removeitem = (index) => {
        setcart(cart => cart.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className='card_length'>
                {cart.length === 0 && <p>No items in cart</p>}
            </div>

            <div className='parent_addtocard'>
                {cart.map((item, index) => (
                    <div className='child_addtocard' key={item.id}>
                        <div className='addtocard_img'>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className='child1_addtocard'>
                            <div className='addtocard_title'>
                                <p>{item.title}</p>
                            </div>

                            <div className='addtocard_short_desc'>
                                <p>{item.short_desc}</p>
                            </div>

                            <div className='addtocard_price'>
                                <p>{item.price}$</p>
                            </div>

                            <div className='addtocard_btn'>
                                <div className='addtocard_buy'><button>Buy</button></div>
                                <div className='addtocard_remove'>
                                    <button onClick={() => removeitem(index)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddToCart;
