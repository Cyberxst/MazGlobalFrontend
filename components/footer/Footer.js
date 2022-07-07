import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./FooterStyles";
import {
	Search,
	ShoppingCartOutlined,
	LocalShippingOutlined,
	SupervisedUserCircleOutlined,
	LockRounded,
	Phone,
	LocationCity,
	WhatsApp,
	Email
  } from "@material-ui/icons";
import Link from "next/link";
import styled from "styled-components";
import ft from './newsletter.module.css'
const Footer = () => {
	useEffect(() => {
	
	  }, []);
return (

	<div className={ft.box}>
	<div className={ft.container}>
		<div className={ft.row}>

		<div className={ft.column}>
		<Image  height='250px' width='200px' src='/Maz Global Logo-02.png'/>
		</div>	
	
		<div className={ft.column}>
			<div className={ft.heading} style={{marginLeft:'0px'}}>Feedback</div>
			<input className={ft.input} type='text' placeholder="Name"/>
			<input className={ft.input} type='email' placeholder="Email"/>
			<textarea  className={ft.textarea} placeholder="Message"></textarea>
            <button className={ft.button}>Submit</button>
		</div>
		<div className={ft.column}>
			

			<div className={ft.heading}>Contact Us</div>
			
			<div className={ft.footlink} href="#"><WhatsApp/>  <P>+44 (0)20 86542 7567</P></div>
			<div className={ft.footlink}  href="#"><Phone/>    <P>+44 (0)20 86542 7567</P></div>
			<div className={ft.footlink}  href="#"><Email/>     <P>contact@mazglobal.co.uk</P> </div>
			<div className={ft.footlink}  ><LocationCity  /> <P> UK  </P></div>
			
						
		</div>
		

<div className={ft.column}  style={{marginTop:'0px', marginLeft:'20px'}}>
			
			
			<div className={ft.heading}  >Quick Links</div>
			<div className={ft.footlink}   ><Link href='/SellAt' as={`/SellAt`}><PP>Terms and Conditions</PP></Link></div>
			<div className={ft.footlink} ><Link href='/Connect_With_Us' as={`/Connect_With_Us`} ><PP>Connect with us</PP></Link></div>
		</div>
		</div>
	</div>
	
	<div style={{borderTop:'1px solid white',
				backgroundColor:'black',
				paddingBottom: "10px",
				marginBottom:'-18px',
				paddingTop: "10px"}}>
	<span style={{ color: "white",
				textAlign: "left",
				paddingBottom: "10px",
				marginLeft:'20px',
				paddingTop: "10px", }}>
		©️ 2022 MazGlobal. All Rights Reserved.
	</span>
	<div className={ft.span}  >
		| Terms & conditions | Privacy | Cookie Disclaimers |

	</div>
	</div>
	</div>
	
);
};
export default Footer;


const Span=styled.span` 
color: white;
float:right;
margin-right:20px; 
@media (max-width: 760px) {
	display:none ;
	
}
`
 const Box = styled.div`
padding: 10px 0px;
background: whitesmoke;
bottom: 0;
width: 100%;

@media (max-width: 760px) {
	background:white ;
	padding:0px ;
	
}
`;

 const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
// margin-left: -230px;
`;
 const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// max-width: 1000px;
	margin: 0 auto;
	padding-top:20px;
	padding-bottom:40px;
	
@media (max-width: 700px) {
	display:none;
	
}
	/* background: red; */
`
const PP=styled.p` 
text-decoration:none;
cursor:pointer;
color:rgba(16, 103, 138, 0.933);
margin-top:0px;
`
const P=styled.p` 
text-decoration:none;
cursor:pointer;
color:rgba(16, 103, 138, 0.933);
margin-top:3px;
margin-left:8px ;
`
const FootLink=styled.div`
 text-decoration:none;
 padding-left:40px !important;
 padding:3px ;
 display:flex;
 flex-direction:row;
 
 color:rgba(16, 103, 138, 0.933);
`
const Input=styled.input`
 width:200px;
 padding:6px ;
 border: 0.095rem solid lightgrey;
 color:white;
 border-radius:4px;
 margin-bottom:4px;
`

 const Button=styled.button`
 width:100px;
 padding:6px ;
 border: 0.095rem solid lightgrey;
 color:white;
 border-radius:4px;
 background-color:rgba(16, 103, 138, 0.933);
`


const Textarea=styled.textarea`
  width:200px;
 padding:6px ;
 color:white;
 font-family:'Helvetica';
 border: 0.095rem solid lightgrey;
 border-radius:4px;
 margin-bottom:4px;
`


 const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(285px, 1fr));
grid-gap: 60px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

 const FooterLink = styled.a`
color: #fff;
// margin-bottom: 20px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

 const Heading = styled.p`
color: rgba(16, 103, 138, 0.933);
text-decoration: none;
margin-left:40px;
font-weight:700;
font-size:18px;
`;