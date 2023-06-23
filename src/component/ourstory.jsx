import { useState } from "react";
import think from './image/think.png'
import our1 from './image/our1.png'
import our2 from './image/our2.png'
import skill1 from './image/skill1.png'
import skill2 from './image/skill2.png'
import client1 from './image/client1.png'
import client2 from './image/client2.png'
import innovation1 from './image/innovation1.png'
import innovation2 from './image/innovation2.png'
import adapt1 from './image/adapt1.png'
import adapt2 from './image/adapt2.png'
import Footer from './footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo1 from './image/Logo1.png';
import Logo from './image/Logo.png';


export default function Story(){
    const [isLightMode, setIsLightMode] = useState(false); 

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
      };

  const bgColor = isLightMode ? 'bg-white' : 'bg-customblue';
  const bgColor1 = isLightMode ? 'bg-customgrey' : 'bg-black';
  const textColor = isLightMode ? 'text-black' : 'text-white';
  const image1 = isLightMode ? our2 : our1;
  const image2 = isLightMode ? skill2 : skill1;
  const image3 = isLightMode ? client2 : client1;
  const image4 = isLightMode ? innovation2 : innovation1;
  const image5 = isLightMode ? adapt2 : adapt1;
  const image = isLightMode ? Logo1 : Logo;
    return(
        <>
        <div className={`h-screen overflow-hidden ${bgColor}`}>
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
                 <ul className={`flex absolute top-2 md:top-20 right-2 md:right-24 ${textColor}`}>
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
       
        <div className={`absolute top-80 left-96 tracking-wider ${textColor}`}>
           <p className="flex justify-center items-center text-center text-4xl">DEDICATED TEAMS</p>
           <p className="flex justify-center items-center text-center text-4xl">FOR YOUR DEDICATED DREAMS</p>
        </div>
      </div>
      <div className={` h-full ${bgColor1}`}>
      <div className="lg:w-[70%] w-[100%] flex justify-center">
            <div className="bg-[white] justify-center  p-7 flex rounded-[10px] xl:w-[700px] lg:h-[356px] w-[600px] h-[330px]">
              <div className="w-[70%] flex items-center">
                <div className="p-7">
                  <h2 className="uppercase font-[500] text-[18px] md:text-[20px] mb-5 text-[#7155F7]">
                    Why We do this?
                  </h2>
                  <p className="text-[black] text-[16px] md:text-[18px] ">
                    ADEC provides tailor-made consulting solutions to help
                    businesses navigate the intricacies of growth, build a solid
                    trajectory, and gain a significant market share. We serve as
                    the catalyst that propels your businesses towards success.
                  </p>
                </div>
              </div>
              <div className="w-[30%] flex justify-center items-center ">
                <img alt="" src={think} />
              </div>
            </div>
          </div>
          <div className={`text-2xl uppercase text-center mt-[-13rem] ml-[48rem] ${textColor}`}>
              Our <br /> Strength
            </div> 
            <div className={`mt-60 ml-48 `}>
                <img alt="" src={image1} />
              </div>
              <div className="w-[60%] flex justify-center relative bottom-48 left-[32rem]">
            <div className=" flex items-center justify-center">
              <div className="p-7 max-w-[800px] mb-20">
                <h2 className={`uppercase font-[500] mb-5 text-[26px] uppercase pt-6 ${textColor}`}>
                  Technological Expertise
                </h2>
                <p className={`${textColor}`}>
                  With our unparalleled technological expertise, we focus on
                  financial, supply chain, business & technology, and HR
                  transformations. Our solutions optimize financial performance,
                  enhance supply chain activities, drive value for customers,
                  employees, and communities. Leveraging IT industrialization,
                  globalization strategies, and cloud computing, we pioneer
                  efficient strategies and skills development.
                </p>
              </div>
            </div>
          </div>
          <div className={`ml-[54rem] mt-[-10rem] `}>
                <img alt="" src={image2} />
              </div>
              <div className="w-[60%] flex justify-center relative bottom-48 left-1">
            <div className=" flex items-center justify-center">
              <div className="p-7 max-w-[800px] mb-20">
                <h2 className={`uppercase font-[500] mb-5 text-[26px] uppercase pt-6 ${textColor}`}>
                SKILLED WORKFORCE
                </h2>
                <p className={`${textColor}`}>
                  With a highly skilled workforce, ADEC understands the
                  obstacles encountered by expanding businesses. We provide
                  customized consulting solutions to steer businesses towards
                  success. From custom software development to data-driven
                  digital marketing, we handle all aspects.
                </p>
              </div>
            </div>
          </div>
          <div className={`ml-48 mt-[-10rem] `}>
                <img alt="" src={image3} />
              </div>
              <div className="w-[60%] flex justify-center relative bottom-48 left-[32rem]">
            <div className=" flex items-center justify-center">
              <div className="p-7 max-w-[800px] mb-20">
                <h2 className={`uppercase font-[500] mb-5 text-[26px] uppercase pt-6 ${textColor}`}>
                Client Relationships
                </h2>
                <p className={`${textColor}`}>
                  ADEC specializes in nurturing client relationships, providing
                  automated solutions, and drive full digital transformations.
                  With expertise in turnkey projects, we serve clients in
                  publishing, educational technology, finance, and legal
                  sectors. Our forward-thinking solutions empower businesses to
                  achieve their digital objectives.
                </p>
              </div>
            </div>
          </div>
          <div className={`ml-[54rem] mt-[-10rem] `}>
                <img alt="" src={image4} />
              </div>
              <div className="w-[60%] flex justify-center relative bottom-48 left-1">
            <div className=" flex items-center justify-center">
              <div className="p-7 max-w-[800px] mb-20">
                <h2 className={`uppercase font-[500] mb-5 text-[26px] uppercase pt-6 ${textColor}`}>
                INNOVATION
                </h2>
                <p className={`${textColor}`}>
                  In today&apos;s digital age, leveraging the power of online
                  platforms is essential for success. Our expert team crafts
                  innovative digital marketing strategies to boost your brand
                  visibility, drive targeted traffic, and convert leads into
                  loyal customers. From social media campaigns to SEO
                  optimization, we&apos;ll help you excel in the digital
                  landscape and stay ahead of the competition
                </p>
              </div>
            </div>
          </div>
          <div className={`ml-48 mt-[-10rem] `}>
                <img alt="" src={image5} />
              </div>
              <div className="w-[60%] flex justify-center relative bottom-48 left-[32rem]">
            <div className=" flex items-center justify-center">
              <div className="p-7 max-w-[800px] mb-20">
                <h2 className={`uppercase font-[500] mb-5 text-[26px] uppercase pt-6 ${textColor}`}>
                ADAPTABILITY
                </h2>
                <p className={`${textColor}`}>
                  ADEC specializes in nurturing client relationships, providing
                  automated solutions, and driving full digital transformations.
                  With expertise in turnkey projects, we serve clients in
                  various sectors. Our forward-thinking solutions empower
                  businesses to achieve their digital objectives.
                </p>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
     
      </>
    );
}