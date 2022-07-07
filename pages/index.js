// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Navbar2 from '../components/Navbar2'
// import Footer from '../components/footer/Footer'
// import Slider from '../components/Slider'
// import Mission from '../components/Mission'
// import FeaturedProducts from '../components/FeaturesProducts/FeaturedProducts'
// import AboutUs from '../components/AboutUs'
// import CustomNav from '../components/CustomNav'
// import Navbar from '../components/Navbar'
// import st from  '../styles/feature.module.css'
// import { useState, useEffect } from "react";
// //import ComingSoon from "react-coming-soon";

// // import Backtotop from '../components/Backtotop'
// import axios from 'axios'
// export default function Home() {

//   const [products,setProducts]=useState([])
//   useEffect(() => {

//     axios.get(`https://api.mazglobal.co.uk/maz-api/products`)//api url
//     .then(resp =>{//calling url by method GET
//           console.log('alll prooo',resp.data.data)
//           let path1="https://api.mazglobal.co.uk/";
      
//           let list=[]
//           resp.data.data.map(it=>{
//             let pp=''
//             it['path']=path1+it.path
//             list.push(it.path)
//             console.log("path22",pp)
          
          
//           })
          
//              setProducts(resp.data.data)
//          }).catch(err=>console.log(err))
//     // alert('Finished loading');
//   }, []);
//   return (
//     <>
//      <Head>
//         <title>Maz Global</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com"  />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       {/* <div className={st.cmng}>
      
//       <center><Image style={{cursor:'pointer',paddingTop:'20px',paddingLeft:'0px'}}  height='120px' width='180px' src='/white_logo.png'/></center>
     
  
//   <ComingSoon
//       image='https://react-coming-soon.maksv.me/default-image.jpeg'
//       bgColor="#fff"
//       textColor="#000"
//       illustration="development"
//     />
//     </div>  */}
//     <Navbar2/>
//     <Navbar/>
    
//     <Slider/>
//     <Mission/>
//     {products.length!=0?<FeaturedProducts products={products}/>:''}
    
//     <div style={{marginTop:'40px'}}>
//       </div>
//     <AboutUs/>
//     <div style={{marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
  
//     </div>
//     <Footer/>  
   
//     </>
//       )
// }

import Image from "next/image"
import hm from '../styles/Home.module.css'
 export default function Home() {
  return(
    
    <div className={hm.body1}>
    <div className={hm.bgimg}>
    <div className={hm.topleft}>
     <Image src="/mazwhite.png" width='120px' height='100'/>
     
    </div>
    <div className={hm.middle}>
        <Image src="/maintenance.png" height='100' width='100'/>
      <h1>COMING SOON</h1>
      <hr className={hm.hr1}/>
      
    </div>
    <div className={hm.bottomleft}>
     
    </div>
  </div>
  </div>
  )
}

