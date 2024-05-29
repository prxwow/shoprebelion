import React, { useState } from 'react'
import userImage from '../images/responsive.png'
import { NavLink, Link } from 'react-router-dom'
import { ABOUTAS_ROUTE, DEVSTORE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { SlBasket } from "react-icons/sl";
import axios from 'axios';
import Getdevise from '../API/Getdevise';





export default function Header(props) {
  
  async function getDevise() {
    const response = await axios.get('http://localhost:3000/items')
            return response.data
    
  }
  
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div >
            <img
            src={userImage} 
            alt="img"
            className='picture'
            width={50}
            >
            </img>
            <Link to={DEVSTORE_ROUTE}  className='logo'> DevStore</Link>
            <ul className='nav'>
                <SlBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button $ {cartOpen && active}`} style={{margin:"0 15px 0 0"}}/>
                <NavLink onClick={getDevise}  to={SHOP_ROUTE} style={{margin:"0 15px 0 0"}} >Магазин</NavLink>
                <NavLink to={ABOUTAS_ROUTE} style={{margin:"0 15px 0 0"}}>О нас</NavLink>
                <NavLink to={LOGIN_ROUTE} style={{margin:"0 15px 0 0"}}>Авторизация</NavLink>
            {cartOpen && (
              <div className='shop-cart'>
                
               

              </div>
            )}    
            
            
            </ul>
        </div>
    </header>
  )
}
