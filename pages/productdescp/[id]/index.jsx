import { Add, PanToolSharp, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Carousel from "../../../components/Carosel";
import Navbar2 from "../../../components/Navbar2";
import Footer from "../../../components/footer/Footer";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  Category,
  LocationCity,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
//import axios from "axios";
//import { addProduct } from '../../../components/redux/action';
import { useRouter } from "next/router";
import React, { memo } from "react";

//import { sliderItems } from "../../../data";
//import { useLocation } from "react-router";
// import { publicRequest } from "../requestMethods";
//import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
//import { Carousel } from 'react-responsive-carousel';
import router from "next/router";
//import {toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//toast.configure()
import ImageMagnifier from "./ImageMagnifier";
import axios from "axios";
import Head from "next/head";
//import Pagination from '@material-ui/lab/Pagination';

import Related from "../../../components/FeaturesProducts/Related";
//import Rating from '@material-ui/lab/Rating';
//import Typography from "@material-ui/core/Typography";
//import Box from '@material-ui/core/Box';
import css from "./index.module.css";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import DataGrid from "react-data-grid";
import SideBar from "../../../components/SideBar";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import tr from "../../../styles/feature.module.css";
const ProductDesp = () => {
  const [cat, setCat] = useState([]);
  const [vehicle, setVehicles] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);
  const [review, setReview] = useState(0);
  const [votes, setVotes] = useState(0);
  const [modal, setModal] = React.useState(false);
  const [togglediv, settoggle] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [slideIndex, setSlideIndex] = useState(0);
  const [path, setPath] = useState("");

  const [icon, setIcon] = useState([
    { name: "S", status: false },
    { name: "M", status: false },
    { name: "L", status: false },
    { name: "XL", status: false },
    { name: "XS", status: false },
  ]);
  const [carddiv, setCardDiv] = useState(false);
  const handleClick = (direction) => {
    console.log("hello");
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : path.length);
    } else {
      setSlideIndex(slideIndex < path.length ? slideIndex + 1 : 0);
    }
  };

  const RadioInput = ({ label, value, checked, setter, name }) => {
    const handelChange = (name) => (e) => {};
    //     let list = [...state]

    //     console.log("valueeee", e.target.value);
    //     // console.log('before list', list)

    //     for (var i = 0; i < state.length; i++) {

    //       if (name === (state[i].name)) {

    //         setter(e.target.value)
    //         state[i].value = e.target.value
    //         console.log("listttt", state)
    //         // setstate(list)
    //       }

    //     }

    //     setstate(state)
    //     console.log('RESultttttttt', state)
    //     state.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
    //     var str = ''
    //     state.map(item => {
    //       str = str + item.value + ' '
    //     })
    //     var str_join = str.split(" ").join("_")
    //     var string = str_join.slice(0, -1);
    //     string = string.toLowerCase()
    //     setstrr(string)

    //     console.log(string)

    //     item.combinations.map((v) => {
    //       if (string === (v.product_variant_name)) {

    //         setcomb(v.regular_price)
    //         setCardDiv(true)
    //         setstrr(state)
    //         setvariant_name(v.product_variant_name)
    //         setvid(v.id)
    //       }
    //       // if(comb!='')

    //       // else
    //       // setCardDiv(false)

    //     })
    //     // console.log("price", comb)
    //   }

    return (
      <label>
        <input
          type="radio"
          checked={checked == value}
          value={value}
          onChange={handelChange(name)}
        />
        <span>{label}</span>
      </label>
    );
  };

  //   const [state, setstate] = useState([{
  //     id: null,
  //     name: '',
  //     value: ''
  //   }]);

  //const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const ChangeStatus = (i) => {
    console.log("status", icon[i].status);
    icon[i].status = !icon[i].status;
  };
  const decCount = () => {
    setCount(count - 1);
  };

  const [spinner, setSpinner] = useState(true);
  const [color, setColor] = React.useState();
  const [mat, setMaterial] = React.useState();
  const [size, setSize] = React.useState();

  //   const [item, setItem] = useState({
  //     name: '',
  //     supplier_id: null,
  //     category_id: null,
  //     variants: [],
  //     combinations: [],
  //     images: []
  //   });
  const [itImg, setItimg] = useState({
    img: "https://www.ks-international.com/media/catalog/product/cache/d3609febb2c99e7862c5859e894847cb/0/7/0704176-web_1.webp",
  });
  const [item, setItem] = useState({});
  const [nproducts, setProductsN] = useState({});
  const router = useRouter();
  const { id } = router.query;

  // const handleCount = () => {
  //   if (count === 1) {
  //     setCount(count);
  //   } else {
  //     let x = count;
  //     x = x - 1;
  //     setCount(x);
  //   }
  // };
  useEffect(() => {
    console.log('idd',id)
    setSpinner(true)
    axios
      .get(`https://api.mazglobal.co.uk/maz-api/products/${id}`)
      .then((res) => {
        console.log("maz", res.data.data);
        setItem(res.data.data);
        const rows = [
          { name: "Product Name", descp: `${res.data.data.name}` },
      
          { name: "Maz No", descp: `${res.data.data.part_no}` },
          { name: "OEM No", descp: `${res.data.data.oem_no}` },
        ];
        let path1 = "https://api.mazglobal.co.uk/";
      
        //res.data.data.images[0]=path1+res.data.data.images[0];
        path1 = path1 + res.data.data.images[0];
      
        setPath(path1);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.mazglobal.co.uk/maz-api/categories`)
      .then((res) => {
        console.log("maz", res.data.data);
        setCat(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.mazglobal.co.uk/maz-api/vehicles`)
      .then((res) => {
        
        setVehicles(res.data.data);
      })
      .catch((err) => console.log(err));
      setRows()
  }, [id]);

  const [comb, setcomb] = useState("");
  const [vid, setvid] = useState();
  const [strr, setstrr] = useState("");
  const [variant_name, setvariant_name] = useState("");
  const [radio, setRadiobtn] = useState({
    selected: "",
    name: "",
  });
  const [radio2, setRadio2btn] = useState({
    selected: "",
    name: "",
  });
  const [radio3, setRadio3btn] = useState({
    selected: "",
    name: "",
  });

  const columns = [
    { key: "name", name: "Name" },
    { key: "descp", name: "Description" },
  ];

  // const rows = [
  //   { name: "Product Name", descp: `${item.name}` },

  //   { name: "Maz No", descp: `${item.part_no}` },
  //   { name: "OEM No", descp: `${item.oem_no}` },
  // ];

  const setRows=()=>{
    const rows = [
      { name: "Product Name", descp: `${item.name}` },
  
      { name: "Maz No", descp: `${item.part_no}` },
      { name: "OEM No", descp: `${item.oem_no}` },
    ];
    setSpinner(false)
  }
  return (
   
   <>
      <Head>
        <title>Product Description</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
     
      {router.isFallback && spinner==true? (<div>Loading...</div>):
      <>
      <Navbar2 />
      <Navbar />
      <img
        src="https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg"
        style={{ width: "100%" }}
      />
      <Container>
        <SideBar />
        <ProductShow>
          <ImgDescp>
            <Image src={path} width="100%" height="600px" />
            
            <Desc>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "200",
                  marginTop: "-10px",
                }}
              >
                {" "}
                {item.name}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "-10px",
                }}
              >
                <h5 style={{ fontWeight: "500", fontSize: "14px" }}>
                  Part Code :
                </h5>
                <p
                  style={{
                    marginTop: "0px",
                    marginLeft: "4px",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  {item.part_no}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: "500",
                  marginTop: "-10px",
                }}
              >
                <h5 style={{ fontWeight: "500", fontSize: "12px" }}>
                  OEM Part Number:
                </h5>
                <p
                  style={{
                    marginTop: "0px",
                    marginLeft: "4px",
                    fontWeight: "400",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  {item.oem_no}{" "}
                </p>
              </div>

             
            </Desc>
          </ImgDescp>

          <MainDiv>
            <div
              style={{
                background: "rgba(16, 103, 138, 0.933)",
                padding: "4px",
                width: "160px",
              }}
            >
              <h5 style={{ color: "white", textAlign: "center" }}>
                DESCRIPTION
              </h5>
            </div>

          
              <Table  striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>{item.name}</td>
                  </tr>
                  <tr>
                    <td>Maz No</td>
                    <td>{item.part_no}</td>
                  </tr>
                  <tr>
                    <td>OEM No</td>
                    <td>{item.oem_no}</td>
                  </tr>
                  <tr>
                    <td>Specifications</td>
                    <td>{item.product_description}</td>
                  </tr>
                  <tr>
                    <td>Cross Reference</td>
                    <td>{item.application}</td>
                  </tr>
                </tbody>
              </Table>
            {/* </div> */}
{/* 
            <SmallDiv>
              <hr
                style={{
                  color: "grey",
                  height: "2px",
                  marginTop: "-2px",
                  width: "80%",
                }}
              />

              <Table className={tr.lartabl} striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>{item.name}</td>
                  </tr>
                  <tr>
                    <td>Maz No</td>
                    <td>{item.part_no}</td>
                  </tr>
                  <tr>
                    <td>OEM No</td>
                    <td>{item.oem_no}</td>
                  </tr>
                  <tr>
                    <td>Specifications</td>
                    <td>{item.product_description}</td>
                  </tr>
                  <tr>
                    <td>Cross Reference</td>
                    <td>{item.application}</td>
                  </tr>
                </tbody>
              </Table>
            </SmallDiv> */}
          </MainDiv>
          <MainDiv>
            <div
              style={{
                background: "rgba(16, 103, 138, 0.933)",
                padding: "4px",
                width: "160px",
              }}
            >
              <h5 style={{ color: "white", textAlign: "center" }}>
                INQUIRY US
              </h5>
            </div>
            <hr
              style={{
                color: "rgba(16, 103, 138, 0.933)",
                height: "2px",
                marginTop: "-2px",
                width: "80%",
              }}
            />
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "30px",
              }}
            >
              <Input
                type="text"
                placeholder="Name"
                className="form-control"
              ></Input>
              <Input
                type="email"
                placeholder="Email"
                className="form-control"
              ></Input>
              <Input
                type="text"
                placeholder=" Product Name"
                className="form-control"
              ></Input>
              <textarea
                placeholder="Message"
                style={{
                  background: "whitesmoke",
                  fontFamily: "Helvetica",
                  borderRadius: "4px",
                  marginBottom: "20px",
                  border: "1px solid lightgrey",
                }}
              ></textarea>
              <button
                type="submit"
                style={{
                  color: "white",
                  width: "200px",
                  borderRadius: "4px",
                  height: "6vh",
                  border: "1px solid lightgrey",
                  background: "rgba(16, 103, 138, 0.933)",
                }}
              >
                Submit
              </button>
            </form>
          </MainDiv>
        </ProductShow>
      </Container>
      <Related />

      <Footer />
    </>
              }
              </>
  );
};

export default ProductDesp;

const Input = styled.input`
  height: 50px;
  border: 0.02rem solid lightgrey;
  padding: 6px;
  margin-bottom: 20px;
  border-radius: 4px;
  background: whitesmoke;
`;
const ProductShow = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 55px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 300px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const ImgDescp = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  border: 1px solid whitesmoke;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 300px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
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
  cursor: pointer;
  padding: 8px;
  font-weight: 300;
  font-family: Montserrat;
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
  font-family: Helvatica;
  background-color: whitesmoke;
`;

const MainDiv = styled.div`
  border: 0.095rem ridge lightgrey;
  width: 860px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 300px) {
    width: 80%;
  }
`;
const SmallDiv = styled.div`
  width: 800px;
  margin-bottom: 30px;
  margin-left: auto;

  margin-right: auto;
  background: yellow;

  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
`;
const P = styled.p`
  text-align: center;
  color: black;
  font-size: 12px;
  padding: 6px;
`;
const Ndiv = styled.div`
  background-color: whitesmoke;
  width: 300px;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 20px;
  height: 40px;
`;
const Review = styled.div`
  margin-top: 450px;
`;
const Size = styled.div`
  margin-left: 20px;
  padding: 20px;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin-right: 6px;

  border-radius: 10px;
  text-align: center;
  border-style: groove;
`;
const SizeArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Rate = styled.div`
  font-weight: 600;
  font-size: 22px;
  font-family: Times New Roman;
`;

const FilterSize = styled.span`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;

const FilterSizeOpt = styled.span`
  padding-left: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  @media (max-width: 300px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  margin-left: 220px;
  margin-right: 150px;
  display: flex;
`;
const Boxx = styled.div`
  padding-top: -200px;
  width: 500px;
  background-color: whitesmoke;
  height: 85vh;
  display: flex;
  position: relative;
  margin-top: 100px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 500px;
  margin-top: -60px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -500}px);
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 500px;

  object-fit: fill;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  margin-left: 50px;
  background: linear-gradient(to right, rgba(16, 103, 138, 0.933), black);
  width: 400px;
  height: 640px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-weight: 400;
  color: yellow;
  padding-left: 20px;
  font-size: 26px;
`;

const Desc = styled.div`
  padding: 8px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const AmountBtn = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;
const Slide = styled.div`
  width: 500px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Button = styled.button`
  cursor: pointer;
  width: 300px;
  color: white;
  margin-bottom: 30px;
  margin-left: 40px;
  margin-right: 20px;
  transition: all 0.5s ease;

  border: 1px solid teal;
  text-align: center;
  background-color: transparent;
  padding: 8px;
  outline: none;
  font-weight: bold;
  border-radius: 1px;
  &:hover {
    color: #ffffff;
    background-color: teal;
    border: 1px solid teal;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b6b6b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

{
  /* 
            {item.variants.map((v) => (
              <Filter>
                <FilterTitle >{v.name.charAt(0).toUpperCase() + v.name.slice(1)}:</FilterTitle>
                <FilterSize onChange={handelChange(v.name)}>
                  <FilterSizeOption value='' selected disabled>Select Values</FilterSizeOption>
                  {v.values.map((opt) => (

                    <FilterSizeOption value={opt}>{opt}</FilterSizeOption>

                  ))}

                </FilterSize><br />
              </Filter>
            ))} */
}
