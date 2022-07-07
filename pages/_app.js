import '../styles/globals.css'
//import ComingSoon from "react-coming-soon";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
// import Preloader from "./components/Preloader/Preloader";
// import Timer from "./components/Countdown/Timer";
// import Optin from "./components/Optin/Optin";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
{/* <div className='cmng'>
    
<Image style={{cursor:'pointer',marginTop:'0px',marginLeft:'0px'}}  height='120px' width='180px' src='/white_logo.png'/>
  <ComingSoon
      image='https://react-coming-soon.maksv.me/default-image.jpeg'
      bgColor="#fff"
      textColor="#000"
      illustration="development"
    />
    </div>  */}
  
  
   
    // <div className="App">
    //   <div className="container">
    //     <h1>
    //       Website
    //       <br />
    //       Coming Soon
    //     </h1>
    //     <Timer />
    //     <Optin />
    //     <Preloader />
    //   </div>
    // </div>

    
  
  
}

export default MyApp
