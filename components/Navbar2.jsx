import { useEffect, useState } from "react";
import React from 'react';
import styled from "styled-components";
//import { useSelector } from "react-redux";
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
} from "@material-ui/icons";


import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.css'
//import logo from "../public/pernia.png";


//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
import Image from "next/image";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Container } from "react-bootstrap";
import { toast, ToastContainer } from 'react-nextjs-toast';
//import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import { TextField } from '@material-ui/core'
import jwt_decode from "jwt-decode";
import CustomNav from "./CustomNav";
import router from 'next/router';
//import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
import {Avatar,Menu,MenuItem,ListItemIcon,Divider,IconButton,Tooltip,Settings ,Logout, PersonAdd,   Badge } from "@material-ui/core";
import { NavDropdown } from "react-bootstrap";

import CNav from "./CustomNav";
//import DropdownC from './Dropdown'
const Navbar2 = () => {
  const [part,setPart]=useState('')
  const [user,setUser]=useState()
  const [id,setId]=useState()
  const [products,setProducts]=useState('');
  const [loggedIn,setloggedIn]=useState('');
  const [errormodal, setErrorModal] = useState(false);
  const [logdiv, setLogDiv] = useState(false);
  const errortoggle = () => setErrorModal(!errormodal);

  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(true);
    console.log("hello in click")
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange=(e)=>{
   setPart(e.target.value)
  }
  useEffect(() => {

    if (localStorage.getItem("token")) {
      setloggedIn(localStorage.getItem('token'))
      console.log('token',localStorage.getItem('token'))
      //setloggedIn("");
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
      
    } else {
      setloggedIn("");
    }
    axios.get(`https://api.mazglobal.co.uk/maz-api/products`)
    .then(res=>{
      setProducts(res.data.data)
    }).catch(err=>console.log(err))
    
    // alert('Finished loading');
  }, [id]);


  const Search=()=>{
     let status=false
    products.map(pr=>{
      console.log('name',pr.name)
      console.log('part',part)
      if(pr.part_no==part)
      {
        setId(pr.id)
        console.log('ifff',pr.name)
        setPart('')
        
        router.push(`/productdescp/${pr.id}`);
      }
     
    })
    if(status==false)
    {
    // errortoggle()
    router.push(
      { pathname: "/products", query: { part: part } }
     
    );
    }
  }

  const [state,setState]=useState({
    dropdownOpen: false
  })
  
 const  toggle=()=> 
    setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  
    const  removeToken=()=> {
      localStorage.removeItem('token')
      router.push('/account/login')

    }
    



  return (
    <div className={nav.Container}>
      <div className={nav.Wrapper}>
        <div className={nav.Topbar}>
     
         
         <PhoneOutlined
           style={{color:'rgba(16, 103, 138, 0.933)', marginTop: "9px", marginLeft: "140px", fontWeight: "300" }}
           width="25px"
           height="25px"
           className={nav.hide}
         />
          <p
            style={{
              marginTop: "9px",
              marginLeft: "10px",
              fontWeight: "300",
            }}
          >
            +92-3315677071
          </p>

         
          <EmailOutlined 
          style={{color:'rgba(16, 103, 138, 0.933)', marginTop: "9px", marginLeft: "50px", fontWeight: "300" }}
          width="25px"
          className={nav.hide}
          height="25px"/>
          <p style={{ marginTop: "9px",
              marginLeft: "10px",
              fontWeight: "300",}}>
            info@mazglobal.com
          </p>
          <TextField
          style={{marginLeft:'auto',marginTop:'4px',background:'white',height:'30px',marginRight:'200px',paddingLeft:'8px', fontFamily: "'Montserrat', sans-serif"}}
          className={nav.Search}
          onChange={ (event) => setPart(event.target.value) }
          
            value={part}
            //label="   Enter Chance No.OEM No"
            placeholder="Enter Part No"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon style={{marginTop:'0px'}} onClick={()=>Search()}/>
                  </IconButton>
                </InputAdornment>
              )
            }}
           />
         
         {/* <Link href="/cart" as={`/cart`}>
                  {0> -1 && (
                    <Badge badgeContent={2} color="primary">
                      <ShoppingCartOutlined
                        color="action"
                        style={{
                          cursor: "pointer",
                          color: "black",
                          fontSize: "28px",
                          marginRight: "20px",
                        }}
                      />
                    </Badge>
                  )}
            </Link> */}
            

            
                
          {loggedIn !="" ? (
            <>
              <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>{user.first_name[0]}</Avatar>
              </IconButton>
            </Tooltip>
         
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={()=>  setAnchorEl(false)}
            onClick={()=>  setAnchorEl(false)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          > 
            <MenuItem>
            
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={()=>removeToken()}>
              
            <ListItemIcon>           
              Logout
              </ListItemIcon>
            </MenuItem> 
            {/* <MenuItem>
              <ListItemIcon>
               <PersonAdd fontSize="small" /> 
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem> */}
          </Menu>
          </>
            
          ) : (
           <>
            

         
   <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            style={{background:'lightgrey',width:'38px',height:'38px',margin:'4px'}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Person sx={{ width: 32, height: 32 }}></Person>
          </IconButton>
        </Tooltip>
     
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={()=>  setAnchorEl(false)}
        onClick={()=>  setAnchorEl(false)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      > 
        <MenuItem>
        
          <Avatar />
          <Link href="/account/register"> 
              <p style={{textDecoration:'none',padding:'8px',marginTop:'8px'}}> Register</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Avatar />
          <Link href="/account/login">  
              <p  style={{textDecoration:'none',padding:'8px',marginTop:'8px'}}> Login</p>
          </Link>
        </MenuItem>
        <Divider />
        
          
        
      
      </Menu>




          </>
          )}
          
        </div>

      {/* <CustomNav/> */}


      <ToastContainer align={'right'} position={'top'} /> 

      </div>
      <Modal isOpen={errormodal} toggle={errortoggle}>
        <ModalHeader toggle={errortoggle}>!OOpps</ModalHeader>
        <ModalBody>
          <>!Not Found Product With this part no</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={errortoggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Navbar2;

const AuthDiv = styled.div`
  display:flex;
  flex-direction:column;
  border:1px solid light grey;
  
 
`;