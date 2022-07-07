import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
  Settings,FlightTakeoff,LocalPolice,Group,HighQuality,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
//import Dropdown from './Dropdown'
import { NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Mission = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  return (
    <div className={nav.mission}>
      <div className={nav.mitem}>
       <Settings style={{height:'70px',width:'70px'}}/>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Our Mission</p>
       <p style={{alignItems:'justify-content',marginLeft:'40px',fontWeight:'300'}}>Help middle and small foreign importers to get quality aftermarket products  
           from professional manufacturers and make their purchase activity smoothly in China</p>
      </div>
      </div>
      <div className={nav.mitem}>
      <VerifiedUser style={{height:'70px',width:'70px'}}/>
       {/* <LocalPolice style={{height:'100px',width:'100px'}}/> */}
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Our Quality</p>
       <p style={{alignItems:'justify-content',marginLeft:'40px',fontWeight:'300'}}>
      More than 15 years experience working  together with our suppliers with our strick testing and inspection before shipment, sustain a warranty rate of below 0.5%.</p>
      </div>
      </div>
      <div className={nav.mitem}>
       <Group style={{height:'70px',width:'70px'}}/>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Our Suppliers</p>
       <p style={{alignItems:'justify-content',marginLeft:'40px',fontWeight:'300'}}>Help middle and small foreign importers to get quality aftermarket products  
           from professional manufacturers and make their purchase activity smoothly in China </p>
      </div>
      </div>
    </div>
  );
};

export default Mission;
