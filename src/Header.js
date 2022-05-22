import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
      <img  classNmae='header_logo' src="./pizza.jpg" alt="" />
      <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello</span>
                <span className='header_optionLineTwo'><a href=''>Sign-in</a></span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>New User</span>
                <span className='header_optionLineTwo'><a href=''>Create Account</a></span>
            </div>  
      </div>
      <div className="Shopping_cart">
          <ShoppingCartIcon/>
          <span className='Shopping_item_count'>0</span>
      </div>
    </div>
  )
}

export default Header
