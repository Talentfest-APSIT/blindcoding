import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

function Header() {

    return (
        <div className = "container2">
            <Navbar id="nav-disable" expand="lg">
                <NavbarBrand className="nav-title">Blind Typing</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Header;