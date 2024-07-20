import { createContext, useState, useEffect } from 'react'

const Cartcontext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setcart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];

    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return (
        <Cartcontext.Provider value={{ cart, setcart }}>
            {children}
        </Cartcontext.Provider>
    )
}

export default CartProvider
export { Cartcontext, CartProvider }
