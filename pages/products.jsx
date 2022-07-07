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
import axios from "axios";
import router from 'next/router';
import Head from 'next/head';
//import Pagination from '@material-ui/lab/Pagination';

const Products = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [color, setColorProducts] = useState([]);
  const [spro, setSizeProduct] = useState([])
  const [img, setImg] = useState([
    {
      id: 1,
      img: "https://www.chanceparts.com/Uploads/pro/Wabco-Button-valve-4630220200.464.1.jpg",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 2,
      img: "https://www.chanceparts.com/Uploads/pro/Air-hose-with-gun.95.1.jpg",
      name: "Wabco Button valve 4630220200",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 3,
      img: "https://www.chanceparts.com/Uploads/pro/Air-hose-with-gun.98.1.jpg",
      name: "Air hose with gun black",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 4,
      img: "https://www.chanceparts.com/Uploads/pro/Gland-hand-11441.247.1.jpg",
      name: "Air hose with gun blue",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 5,
      img: "https://www.chanceparts.com/Uploads/pro/Gland-hand-11440.246.1.jpg",
      name: "Gland hand 11441",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 6,
      img: "https://www.chanceparts.com/Uploads/pro/Gland-hand-12308.245.1.jpg",
      name: "Gland hand 11440",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 7,
      img: "https://www.chanceparts.com/Uploads/pro/Wabco-Gland-hand-4522002120.140.1.jpg",
      name: "Gland hand 12308",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 8,
      img: "https://www.chanceparts.com/Uploads/pro/Gland-Hand-Phillips-12006.45.1.jpg",
      name: "Wabco Gland hand 4522002120",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 9,
      img: "https://www.chanceparts.com/Uploads/pro/Wabco-Button-valve-4630220200.464.1.jpg",
      name: "Gland Hand Phillips 12006",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 10,
      img: "https://www.chanceparts.com/Uploads/pro/Air-hose-with-gun.95.1.jpg",
      name: "Coiled electrical cable 244621",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 11,
      img: "https://www.chanceparts.com/Uploads/pro/Air-hose-with-gun.98.1.jpg",
      name: "Iron 7 unit sets",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 12,
      img: "https://www.chanceparts.com/Uploads/pro/Gland-hand-11441.247.1.jpg",
      name: "Automatic Joystick valve HVD 705002333",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
  ]);
  useEffect(() => {
    

    let p=router.query.part;
    axios.get(`https://api.mazglobal.co.uk/maz-api/products`)//api url
    .then(resp =>{//calling url by method GET
          
             if(router.query.part==''|| router.query.part==undefined)
             {
             setSizeProduct(resp.data.data)
             }
             else
             {
             setSizeProduct([])
             }
         }).catch(err=>console.log(err))
    // const config = {
    //     headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token'),
    //     },
    // //   };
    //     axios.get( `http://localhost:8080/maz-api/products/page/${1}`)//api url
    //    .then(resp =>{//calling url by method GET
    //          setItems(resp.data.data)
    //             setSizeProduct(resp.data.data)
    //         }).catch(err=>console.log(err))
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
    <MContainer>
       <Head>
        <title>Product Description</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar2/>
      <Navbar/>
      <img
        src="https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg"
        style={{width:'100%'}}
      />
      <Container>
        <SideBar/>
        <div style={{ marginTop: "55px" }}>
          <Productshow>
            {/* spro.length==0?<> Sorry No items to show</>: */}
            {spro.length==0?<h3>No Result Found</h3>:
            <>
            {spro.map((item,i) => (
              <SingleProduct item={item}  key={item.id} />
            ))}
            </>
}
          </Productshow>
            
        </div>
        {/* <Pagination style={{marginLeft:'600px',marginRight:'100px'}}count={10} page={page} onChange={handlePageChange}/>
            <Footer /> */}
      </Container>
      <Footer />
    </MContainer>
  );
};

export default Products;


const MContainer = styled.div`

`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
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
  
  width: 920px;
  margin-top: 0px;
  display: flex;
  padding-left:10px;
  margin-right:100px;
  border: 0.095rem ridge lightgrey;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 700px) {
  display: flex;
  flex-direction: row;
	flex-wrap:wrap;
	margin-left: auto;
  margin-right: auto;
  width:100%;
  padding:4px;
  margin-right:0px;
}
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  margin-left: auto;
  margin-right: auto;
 
`;

