import React, { useContext } from "react";
import "../assets/css/navbar.css"
import { Link, NavLink } from "react-router-dom";
import { Cartcontext } from "../pages/CartProvider";

function Navbar() {
    const { cart } = useContext(Cartcontext);
    return (
        <div>

            <nav class="navbar">
                <div class="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul class="menu-items">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Product</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Category</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Contact</NavLink>
                        </li>

                        <li>
                            <div className="card_icon">
                                <Link to="/addtocart">
                                    <label class="btn btn-secondry position-relative">
                                        <i class="fa-solid fa-cart-plus"></i>
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cart?.length || "0"}
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </label>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFC4J7f96T2fnVGA9iWB3uTMIEDJIN3T2d_9vV5oZVBduFjrAiwNz-kdkqropdeikxkc0&usqp=CAU" class="logo" />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
