import React from 'react';

import {
    Navbar,
    NavbarBrand,
    NavItem,
    Nav,
    Button
} from 'reactstrap';

import { Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';

export function TopNavbar(props) {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link to={`/`}><NavbarBrand>React Assessment</NavbarBrand></Link>
                <NavbarBrand>Logged in: {props.loggedIn}</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to={`/Register`}><Button>Register</Button></Link>
                        <Link to={`/Login`}><Button>Login</Button></Link>
                        <Link to={`/ViewUsers`}><Button>View Users</Button></Link>

                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}