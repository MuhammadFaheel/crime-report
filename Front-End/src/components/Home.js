import React from 'react'
import '../App.css'
import ComplaintList from './list/ComplaintList'
import MissingList from './list/MissingList'
import CrimeList from './list/CrimeList'
import { Nav, NavItem, Button, NavLink } from 'reactstrap'

function Home() {
    return (
        <div>
            <Nav>
                <NavItem>
                    <NavLink href= '/complaint' ><Button color='danger'><b>Complaint</b></Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href= '/crime-report' ><Button color='danger'><b>Crime_Report</b></Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href= '/missing-person' ><Button color='danger'><b>Missing_Person</b></Button></NavLink>
                </NavItem>
            </Nav>
            <ComplaintList />
            <MissingList />
            <CrimeList />
        </div>
    )
}

export default Home
