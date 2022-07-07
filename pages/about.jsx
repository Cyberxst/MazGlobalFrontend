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
//import axios from "axios";
//import Pagination from '@material-ui/lab/Pagination';

const About = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [color, setColorProduct] = useState([]);
  const [spro, setSizeProduct] = useState([
    {
      id: 1,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/1/1/11979.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 2,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001420-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 3,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001272_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 4,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700185_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 5,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 6,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012367K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 7,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012736-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 8,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 9,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012368K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
  ]);
  useEffect(() => {
    // const config = {
    //     headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token'),
    //     },
    //   };
    //     axios.get( `http://95.111.240.143:8080/ecom-api/products/page/${1}`)//api url
    //    .then(resp =>{//calling url by method GET
    //          setItems(resp.data.data)
    //             setSizeProduct(resp.data.data)
    //         }).catch(err=>console.log(err))//setting response to state posts
  }, []);

  const handlePageChange = (event, value) => {
    //   setPage(value);
    //   console.log("val",value)
    //   axios.get(`http://95.111.240.143:8080/ecom-api/products/page/${value}`)
    //   .then(res=>{
    //     console.log('data',res.data.data)
    //     setSizeProduct(res.data.data)
    //   }) .catch(err=>console.log(err))
  };

  const handleSelectChange = (e) => {
    //   var slist=[]
    // items.map((sin,i)=>{
    //     axios.get(`http://95.111.240.143:8080/ecom-api/products/${sin.id}`)
    //     .then(res=>{
    //        if(res.data.data.variants.length!=0)
    //        {
    //         slist.push({...res.data.data,
    //           ['id']:sin.id
    //         })
    //          Sort(slist,e.target.value)
    //        }
    //         }).catch(err=>console.log(err))
    // })
    // setColorProduct(slist)
  };
  function Sort(slist, value) {
    //   var cl=[]
    //     slist.map(it=>{
    //       it.variants.map(v=>{
    //            v.values.map(sz=>{
    //              if(sz==value)
    //              {
    //              cl.push(it)
    //              }
    //            })
    //       })
    //     })
    //     setSizeProduct(cl)
  }
  return (
    <>
      <Navbar2 />
      <Navbar />
      <img
        src="https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg"
        style={{width:'100%'}}
      />
      <Container>
        <Div >
      <SideBar/>
      </Div>
        <div style={{ marginTop: "55px" }}>
          <Productshow>
            <h2 >About Us</h2>
            <P>
              MAZ Global is a team of people working in truck spare parts more
              than 15 years. With the development truck parts industry and
              technology in the last decade in China, we are also growing up
              with them. We save a wide and close purchase sources after years
              of cooperation with many truck parts manufacturers.We continuously
              strive to source new products of high quality and extremely
              competitive prices to satisfy our wide range of customers
              throughout all around the world.
            </P>
            <P>
              We always find that middle and small foreign importers are hard to
              get high quality spare parts with competitive prices from
              different manufacturers and coordinate to make shipment smoothly.
            </P>
            <P>
              Here at MAZ Global, we look to our suppliers as partners.
              Important partners that we count on to protect our performance and
              the steadfast quality MAZ Global is known for. This is why we work
              hard to provide you with the parts and services to improve your
              knowledge, more efficiently support your activities and foster a
              close and productive relationship with MAZ Global.
            </P>
            <P>
              Our target is to be more professional and efficient purchasing
              company for more worldwide customers, with our good idea about
              truck parts from China and our One-stop services .
            </P>

            <P>Highlighed Products:</P>
            <ul style={{ fontFamily:'Montserrat' }}>
              <li> Air Brake Systems</li>
              <li> Clutch</li>
              <li> Wheel Brake</li>
              <li> Power Steering Pump</li>
              <li> Suspension</li>
            </ul>

            <P>Main Services</P>

            <ul style={{ fontFamily:'Montserrat' }}>
              <li> Products Sourcing</li>
              <li>Factory Inspection</li>
              <li> Shipment Insepection</li>
              <li> Combined Shipment Coordination</li>
            </ul>
          </Productshow>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;


const Div= styled.h1`
  margin-left:50px;
  @media (max-width: 700px) {
   margin:20px;
}
@media (max-width: 300px) {
  margin:20px;
  
}

`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const P = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin-top:20px;
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
  padding: 20px;
  width: 700px;
  margin-bottom: 50px;
  border:0.095rem solid lightgrey;
  display: flex;
  margin-left:150px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 700px) {
   margin:20px;
   width:90%;
}
@media (max-width: 300px) {
  margin:20px;
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
