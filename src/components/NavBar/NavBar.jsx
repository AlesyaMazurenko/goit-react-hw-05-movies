/// rfc
// import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styles from './navbar.css';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <div className='nav_container'>
                {/* <Link to="/">Logo</Link> */}
                <Link to='/' className='navbar_row' end>Home</Link>   {/* className='navbar_row'>Home</div> */}
                <Link to='/movies' className='navbar_row'>Movies</Link>  {/*  <div className='navbar_row'>Movies</div>  */}
                
                 <Outlet />
            </div>
        </nav>
       
  )
}



