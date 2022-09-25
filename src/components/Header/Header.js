import React from 'react';
import Drower from '../Drower/Drower';
import Products from '../Products/Products';
import logo from './Logo.svg'

const Header = () => {
    return (
        <div className=' bg-[#1C2B35]'>
            <div className="navbar flex-col md:flex-row text-white  lg:px-28">
  <div className="flex-1">
    <img src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 ">
      <li className='hover:text-orange-600'><a>Order</a></li>
      <li tabIndex={0}>
        <a  className='hover:text-orange-600'>
        Order Review
        </a>
      </li>
      <li className='hover:text-orange-600'><a>Manage Inventory</a></li>
      <li className='hover:text-orange-600 hidden md:block'><a>Login</a></li>
    </ul>
    <div>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Header;