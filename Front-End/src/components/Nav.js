import React from 'react'
import '../App.css'
import { Nav, NavItem, NavLink } from 'reactstrap'

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <Nav>
            <h1>Crime Report And Missing Finder</h1>
            <NavItem>
                <NavLink href= '/' style= {navStyle} >Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href= '/sign-up' style= {navStyle} >Sign Up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href= '/login' style= {navStyle} >Login</NavLink>
            </NavItem>
        </Nav>
    )
}

export default Nav
