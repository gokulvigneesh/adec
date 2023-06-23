import { useState } from "react";
import Logo1 from './image/Logo1.png';
import Logo from './image/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer'


export default function Solution(){
    const [isLightMode, setIsLightMode] = useState(false); 

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
      };
      
      const bgColor1 = isLightMode ? 'bg-customgrey' : 'bg-black';
      const bgColor2 = isLightMode ? 'bg-custompurple' : 'bg-customblue';
      const textColor = isLightMode ? 'text-black' : 'text-white';
      const textColor1 = isLightMode ? 'text-white' : 'text-black';
      const textColor2 = isLightMode ? 'text-white' : 'text-customblue';
      const image = isLightMode ? Logo1 : Logo;

      return(
        <>
        <div className={`h-[1200px] overflow-hidden opacity-80 ${bgColor1}`}> 

            <Link to="/head" className="h-5 w-5">
        <img
             className={`object-cover  h-15 w-15 mt-20  ml-20 `}
             src={image}
             alt="Logo" 
             />
         </Link>   

         <div
                 className={`bg-blue-500 text-white py-2 px-4 rounded-full flex items-center justify-center w-4 h-8 absolute top-2 right-2 md:top-20 md:right-16 ${textColor}`}
                 onClick={toggleMode}
             >
                 {isLightMode ? (
                     <FontAwesomeIcon icon={faSun} className="text-xl" />
                 ) : (
                     <FontAwesomeIcon icon={faMoon} className="text-xl" />
                 )}
             </div>
            
             
             <div>
                 <ul className={`flex absolute top-2 md:top-20 right-2 md:right-24  ${textColor}`}>
                     <li className="mx-2 md:mx-4">
                         <Link to="/ourstory">Our Story</Link>
                     </li>
                     <li className="mx-2 md:mx-4">
                         <Link to="/solution">Solution</Link>
                     </li>
                     <li className="mx-2 md:mx-4">
                         <Link to="/contact">Contact</Link>
                     </li>
                 </ul>
             </div> 

             <div className={`max-w-sm pr-4  ml-[95px] mt-[95px] mb-0 mb-[30px] text-left block  ${textColor}`}>
             <div className="text-[26px] font-semibold text-customblue">
               OUR
               <div className="text-customblue">SOLUTIONS</div>
             </div>
            <div className="sm:text-[24px] sm:leading-[41px] text-[8px] leading-[12px] font-light">
              Adec offers a comprehensive suite of consulting services that
              cover all aspects of a business&apos;s growth journey. We provide
              end-to-end solutions designed to optimize your business
              performance.
            </div>
          </div>
          <div className="h-[45%] w-[30%] bg-customblue absolute top-[230px] left-[700px] rounded-lg ">
         <div className={`h-[300px] w-[400px] bg-white absolute top-[-20px] left-[-30px] rounded-lg  ${bgColor2} `}>
         <div className='justify-center items-center text-center mt-[45px]'>
            <h3 className={`inline text-xl  ${textColor2}`}>DATA ANALTICS</h3>
            <p className= {`flex pt-8 antialiased p-5 ${textColor1}`}>Our Data Analytics solutions enable businesses to derive valuable insights from complex data sets, facilitating data-driven decision-making. Unlock the power of data with our solutions by optimizing marketing efforts, and identifying cost-saving initiatives.</p>
         </div>
         </div>
         </div>

         <div className="h-[350px] w-[330px] bg-customblue absolute top-[630px] left-[500px] rounded-lg ">
         <div className={`h-[350px] w-[330px] bg-white absolute top-[-21px] left-[-21px] rounded-lg  ${bgColor2} `}>
         <div className='justify-center items-center text-center mt-[45px]'>
            <h3 className={`inline text-xl  ${textColor2}`}>CUSTOM SOFTWARE DEVELOPMENT</h3>
            <p className= {`flex pt-8 text-base p-5 ${textColor1}`}>Our custom software solution includes IoT integration platform and IT assets therefore making web and mobile app along with no-code development an easy feat. With ADEC, leverage technology solutions for maximum efficiency.</p>
         </div>
         </div>
         </div>

         <div className="h-[330px] w-[310px] bg-customblue absolute top-[730px] left-[900px] rounded-lg ">
         <div className={`h-[330px] w-[310px] bg-white absolute top-[-21px] left-[-21px] rounded-lg  ${bgColor2} `}>
         <div className='justify-center items-center text-center mt-[45px]'>
            <h3 className={`inline text-xl  ${textColor2}`}>DIGITAL MARKETING</h3>
            <p className= {`flex pt-8 text-base p-5 ${textColor1}`}>Our Digital Marketing solutions and Programmatic Advertising services, increases your brand visibility, widen your scope for target audience and optimize your cost with our customized marketing initiatives thereby maximizing your omnichannel presence.</p>
         </div>
         </div>
         </div>
        
        </div>
        <Footer/>
        </>
      );

    }