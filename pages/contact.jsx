import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import styled from "styled-components";


import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined,Category, Email,Person,Message, FaceTwoTone } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SideBar from "../components/SideBar";
import ft from '../styles/feature.module.css'
const ContactUs=()=>{
  useEffect(() => {
    // alert('Finished loading');
  }, []);
return(
    <>
    <Navbar2/>
    <Navbar/>
    <img src='https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg' style={{width:'100%'}}/>
      <Container>
        <Mdiv >
        <SideBar/>
        </Mdiv>
          <Ldiv >
          <Productshow>
          <Div>
              
          </Div>
          <Ndiv >
          <TextField type='text' placeholder="Name" 
          className={ft.text}
          InputProps={{
            endAdornment: (
              
                <IconButton>
                  <Person style={{marginTop:'0px'}}/>
                </IconButton>
             
            )
          }}
          />
          <TextField type='email' placeholder="Email"  
           className={ft.text}
          InputProps={{
            endAdornment: (
              
                <IconButton>
                  <Email style={{marginTop:'0px'}}/>
                </IconButton>
            
            )
          }}
          />
           <TextField placeholder="Message"
            className={ft.text}  
            
            InputProps={{
                endAdornment: (
                  
                    <IconButton>
                      <Message style={{marginTop:'0px'}}/>
                    </IconButton>
                
                )
              }}


           />
           <button   className={ft.btn} >Send</button>
          </Ndiv>
         </Productshow>
</Ldiv>


</Container>
<Footer/>
</>
);
};
export default ContactUs;



const Ldiv=styled.div`
margin:55px;
@media (max-width: 700px) {
  margin-top:40px;
  margin-left:0px;
  margin-right:0px;
  
}
@media (max-width: 300px) {
  margin:20px;
  
}
`
const Ndiv=styled.div`
margin-left:40px;
margin-right:20px;
@media (max-width: 700px) {
  margin:10px;
}
@media (max-width: 300px) {
  margin:20px;
  
}
`


const Mdiv=styled.div`
  margin-left:72px;
  @media (max-width: 700px) {
   margin:0px;
}
@media (max-width: 300px) {
  margin:0px;
  
}
`
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const Div = styled.div`
  height:140px;
  background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmddZCBWW8fnRf125HbPUzEt74Q_Nlt_-mJA&usqp=CAU');
  width:500px;
  object-fit:fill;
  repeat:no repeat;
  @media (max-width: 700px) {
    width:100%;
}
@media (max-width: 300px) {
  width:90%;
  
}
  
`;
const P= styled.p`
  font-weight:320;
`;
const Bar = styled.div`
   display:flex;
   width:245px;
   flex-direction:row;
   background-color:whitesmoke;
   //border-style:groove;
   border-bottom-color:whitesmoke;
  text-align: center;
`;


const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Filter = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: column;
  

  //height:40px;
  // background-color:white;
`;

const FilterHome = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  //height:40px;
`;
const Images = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  //height:40px;
`;

const LeftBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;

  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const SearchBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  margin-bottom: 40px;
  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 16px;
  padding: 8px;
  font-weight:300;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 10px;
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding: 6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
`;
const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 9px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: whitesmoke;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  
  width:500px;
  
  border:0.095rem solid lightgrey;
  margin-top:0px;
  display: flex;
  
  margin-left:150px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 700px) {
 width:70%;
 margin-left:auto; 
 margin-right:auto;
}
@media (max-width: 300px) {
 width:90%;
 margin-left:auto;
 margin-right:auto;
  
}
`;

const Container = styled.div`
display:flex;
flex-direction:row;  
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    display: flex;
  flex-direction: column;
  margin:0px;

}
@media (max-width: 300px) {
  display: flex;
  flex-direction: column;
  
}

`;

