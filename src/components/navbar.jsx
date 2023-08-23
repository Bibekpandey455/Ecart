import React from 'react'
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
         <div className='links'>
             <Link to ='/home'>Home</Link>
             <Link to ='/product'>Product list</Link>
             <Link to ='/contact'>Contact</Link>

        </div>
        <div className ='Links'>
            <Link to ='/'>Shop</Link>
            <Link to ="/cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
       
    </div>
  )
}
