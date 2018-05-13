
import React from 'react';
import { Link } from 'react-router-dom';
import CheckIn from './CheckIn';
import About from './About';
import App from './App';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink} from 'reactstrap';
  
class Menu extends React.Component {
    render() {
        return (
            <div>
                <Navbar id="def-head">
                <NavbarBrand className="link-none" href="/">SEEK</NavbarBrand>
                    <Nav>
                        <NavLink href="/check-in" className="navLink">Check In</NavLink>
                        <NavLink href="/About" className="link-about">About</NavLink>
                        {/* <NavLink href="admin-login">ADMIN</NavLink> */}
                        <NavLink href="login" className="link-none">Admin</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Menu;

//<Link to ='/check-in' className="link-none navLink"></Link>

// <Navbar id="def-head">
//                 <NavbarBrand><Link to ='/' className="link-none">SEEK</Link></NavbarBrand>
//                     <Nav>
//                         <NavLink className="navLink"><Link to ='/check-in' className="link-none navLink">Check In</Link></NavLink>
//                         <NavLink href="/About/" className="link-about">About</NavLink>
//                     </Nav>
//                 </Navbar>