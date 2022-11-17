/// rfc
// import React from 'react'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import './Layout.css';

export const Layout = () => {
    return (
        <>
        <header className='navbar'>
            <AppBar/> 
            </header>
            <Suspense>
                <Outlet />
            </Suspense>
            
            {/* <div>Content</div> */}
        </>
       
    );
};


//   <nav className='nav_container'>
//                     {/* <Link to="/">Logo</Link> */}
//                     <Link to='/' className='navbar_row' end>Home</Link>
//                     <Link to='/movies' className='navbar_row'>Movies</Link>
                
//                     {/* <Outlet /> */}
//                 </nav>



