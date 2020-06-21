import React from 'react'
import '../App.css'
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavBar() {

    const navStyle = {
        color: 'white'
    }

    return (
        <Nav>
            <h1 style= {navStyle}>Crime Report And Missing Finder</h1>
            <NavItem>
                <NavLink href= '/' style= {navStyle} >Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href= '/sign-up' style= {navStyle} >Register</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href= '/login' style= {navStyle} >Login</NavLink>
            </NavItem>
        </Nav>
    )
}

export default NavBar;
