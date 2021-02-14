import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import { Link } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

     const [{basket,loggedinuser},dispatch] = useStateValue();

     // console.log("my basket",basket)

     const logoutUser =()=>{
          if(loggedinuser){
               auth.signOut();
          }
          else{
               dispatch()
          }
     }

     return (
          <div className="header">
               <img className="header__logo" src="" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
               <div className="header__search">
                    <input type="text" className="header__serachInput"/>
                    <SearchIcon className="header__searchIcon" />
               </div>
          
               <div className="header__nav">
               <Link to={!loggedinuser && "/login"} className='header__link'>
               <div onClick={logoutUser} className="header__option">
                    <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
                    <span className="header__optionLineTwo">{loggedinuser ? "Signout": 'SignIn'}</span>
               </div>
               </Link>
               
               <Link to="/" className='header__link'>
               <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">$ Orders</span>
               </div>
               </Link>
               
               </div>

               <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                         <ShoppingBasketIcon/>

                         <span className="header_optionLineTwo header__productCount">{basket?.length}</span>
                    </div>
               </Link>
          </div>
     )
}

export default Header;
