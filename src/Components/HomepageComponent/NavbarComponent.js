import React,{useState} from 'react';
import '../../assets/style/HomepageStyle/NavbarComponent.css';
import logo from '../../assets/icons/Logo.svg';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
} from 'reactstrap';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    
  return (
        <div>
        <Navbar dark expand="sm" className="navbar">
          <NavbarBrand href="/" className="NavbarBrand">
            <img src={logo} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="menuLogo"/>
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem className="NavItem">
              <Link to={"/"}>
                <NavLink href="/components/">Home</NavLink>
              </Link>
            </NavItem>

          <NavItem className="NavItem">
            <Link to={"/foodpage"}>
                <NavLink href="">Foods</NavLink>
            </Link>
          </NavItem>
          
          <NavItem className="NavItem">
            <Link to={"/cocktailspage"}>
                <NavLink href="">Drinks</NavLink>
            </Link>
          </NavItem>

          <NavItem className="NavItem">
            <Link to={"/aboutpage"}>
                <NavLink href="">About</NavLink>
            </Link>
          </NavItem>
           
        </Nav>
         
        </Collapse>
              
       
        </Navbar>
      </div>
    )
}

export default NavbarComponent;
