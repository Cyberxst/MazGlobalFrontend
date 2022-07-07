import styled from "styled-components";

import Navbar2 from "../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined, Category } from "@material-ui/icons";
import Navbar from "../components/Navbar";

import SideBar from "../components/SideBar";

import Backtotop from "../components/Backtotop";


const Faq = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  return (
    <>
      <Navbar2 />
      <Navbar />
      <img
        src="https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg"
        style={{width:'100%'}}
      />
      <Container>
        <div style={{ marginLeft: "72px" }}>
      <SideBar/>
      </div>
        <div style={{ margin: "62px" }}>
          <Productshow>
            <P
              style={{
                fontWeight: "300",
                fontSize: "28px",
                marginTop: "-10px",
                fontFamily: "Montserrat",
              }}
            >
              F.A.Q
            </P>

            <P style={{ fontWeight: "bold" }}>
              1- What if you don not have the part I am looking for?
            </P>
            <P >
              It iss not an issue if we don not have the part you require. We search
              thousands of salvage yards for vehicle parts using an inventory
              locating system. We can utilize this system to look for the part
              you are looking for, or we can send you to another junkyard that
              might have it. This service is provided as a convenience to our
              customers, and it is one of the many characteristics that
              distinguish us from others.
            </P>

            <P style={{ fontWeight: "bold" }}>
              2- Are you able to provide parts for both new and old trucks?
            </P>
            <P >
              Yes, our junkyard has a large variety of trucks. We also have a
              large selection of vintage vehicle parts.
            </P>

            <P style={{ fontWeight: "bold" }}>
              3- Do you test all of your products before they are delivered?
            </P>
            <P >
              Yes, we test everything before we ship it.
            </P>

            <P style={{ fontWeight: "bold" }}>
              4- what is your estimated delivery time?{" "}
            </P>
            <P >
              After receiving your advance payment, it usually takes 30 to 60
              days. The delivery time is determined by the goods and amount of
              your order.
            </P>
            <P style={{ fontWeight: "bold" }}>
              5- What are the most common vehicle parts to be replaced?
            </P>
            <P >
              Tires, clutches, and brakes are the most often replaced components
              on heavy-duty vehicles, which should come as no surprise given
              that they are subjected to the most wear and tear.
            </P> 
            <P style={{ fontWeight: "bold" }}>
              6- What is the difference between original equipment manufacturer
              (OEM) and aftermarket parts?{" "}
            </P>
            <P >
              OEM stands for Original Equipment Maker, meaning these parts are
              produced by the cars manufacturer. Non-manufacturer firms, on the
              other hand, design aftermarket parts. When using aftermarket car
              parts, make sure they are compatible with your vehicle and that
              they don not void any warranties or lease agreements you may have on
              the vehicle.
            </P>
            <P style={{ fontWeight: "bold" }}>
              7- When I am done with my old parts, what should I do with them?
            </P>
            <P >
              It is not as simple as tossing old components in the garbage. If
              you need to get rid of outdated or damaged parts, you can sell
              them to a parts dealer or shop, sell them for scrap metal, or
              recycle them if all else fails.
            </P>

            <P style={{ fontWeight: "bold" }}>
              8- Why is it necessary to analyze components?{" "}
            </P>
            <P >
              To ensure that the material, as well as the join, can withstand
              the forces in such an impact, it is critical to determine the
              material is strength. Other fabrics in automobiles are put through
              rigorous testing to assure their long-term durability.{" "}
            </P>
            <P style={{ fontWeight: "bold" }}>
            9-	Is there a warranty on auto parts?{" "}
            </P>
            <P >
            Unless otherwise noted on your receipt, we offer a one-year part replacement warranty.{" "}
            </P>
          </Productshow>
        </div>
      </Container>
      <Footer />
      {/* <Backtotop/> */}
    </>
  );
};

export default Faq;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const P = styled.p`
  font-weight: 400;
  margin-top:10px;
  font-family:  'Montserrat', sans-serif;
`;
const Bar = styled.div`
  display: flex;
  width: 245px;
  flex-direction: row;
  background-color: whitesmoke;
  //border-style:groove;
  border-bottom-color: whitesmoke;
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
  font-weight: 300;
  font-family:  Arial, Helvetica, sans-serif;
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
  font-family:  Arial, Helvetica, sans-serif;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  padding: 20px;
  padding-top: 0px;
  width: 700px;
  margin-top: 0px;
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 700px) {
    width:90%;
}
@media (max-width: 300px) {
  width:90%;
  
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    display: flex;
  flex-direction: column;
}
@media (max-width: 300px) {
  display: flex;
  flex-direction: column;
  
}
`;
