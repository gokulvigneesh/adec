import { useState } from "react"; 
import Group from './image/Group.png';
import img from './image/img.png';
import fixigo from './image/fixigo.png';
import jarvison from './image/jarvison.png';
import Tech from './image/Tech.png';
import Footer from './footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo1 from './image/Logo1.png';
import Logo from './image/Logo.png';

 
export default function Head() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const bgColor = isLightMode ? 'bg-white' : 'bg-customblue';
  const textColor = isLightMode ? 'text-black' : 'text-white';
  const image = isLightMode ? Logo1 : Logo;
    
 
  
  return (
    <>
      <div className={`h-screen overflow-hidden ${bgColor}`}>
      <img
             className={`object-cover object-center h-15 w-15 mt-20 ml-20 `}
             src={image}
             alt="Logo" 
           
             />
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
        <p className={`mt-[2rem] sm:mt-32 ml-20 sm:ml-20 ${textColor}`}>We’re here to,</p>
        <p className={`mt-1 sm:mt-1 ml-20 sm:ml-20 text-2xl break-words ${textColor} pt-1 sm:pt-1`}>
          Establish clear and
        </p>
        <p className={`mt-1 sm:mt-1 ml-20 sm:ml-20 text-2xl break-words ${textColor}`}>
          measurable goals for your
        </p>
        <p className={`mt-1 sm:mt-1 ml-20 sm:ml-20 text-2xl break-words ${textColor}`}>
          business
        </p>
        <p className={`mt-5 sm:mt-5 ml-20 sm:ml-20 ${textColor} pt-1 sm:pt-2`}>to build a strong brand</p>
        <Link to="/solution" >
        <button className="bg-blue-500 text-white py-1 px-8 rounded-xl mt-4 sm:mt-8 ml-[5rem] sm:ml-20 flex items-center justify-center">
          Explore
        </button>
        </Link >
        <div className="absolute top-80 sm:top-36 right-7 sm:right-24  h-5/6 w-2/6 ">
          <img src={Group} alt="Logo" />
        </div>
  
      </div>
      <div className={`h-screen opacity-80  ${bgColor}`}>
        <p className={`indent-4 sm:indent-8 pt-20 pl-4 sm:pl-32  text-2xl ${textColor}`}>
          <span className="text-custompurple">A</span>bout Us
        </p>
        <p className={` pt-2 pl-4 sm:pl-20  text-lg sm:text-xl pt-5 sm:pt-20 ${textColor}`}>
          ADEC provides tailor-made consulting
        </p>
        <p className={`pt-2 pl-4 sm:pl-20  text-lg sm:text-xl ${textColor}`}>
          solutions to help businesses navigate the
        </p>
        <p className={` pt-2 pl-4 sm:pl-20  text-lg sm:text-xl ${textColor}`}>
          intricacies of growth, build a solid
        </p>
        <p className={`pt-2 pl-4 sm:pl-20  text-lg sm:text-xl ${textColor}`}>
          trajectory, and gain a significant market share.
        </p>
        <img className="absolute bottom-[-580px] sm:bottom-[-499px] right-[7rem] sm:right-[55px] h-2/6 w-2/6 sm:h-4/6 w-3/6" src={img} alt="Logo" />
      </div>
      <div className='h-80 bg-customgrey'>
        <p className='text-center text-2xl pt-5'><span className="text-customblue">C</span>lientele</p>
        <p className='text-center pt-2'>Propel your business towards new horizons with Adec Presenting a list of our clientele</p>
        <div className='bg-white w-20 sm:w-60 h-28 absolute left-8 sm:left-52 bottom-[-56rem]'>
          <img className='mx-auto my-8 flex' src={Tech} alt="" />
        </div>
        <div className='bg-white w-20 sm:w-60 h-28 absolute left-[11rem] sm:left-[33rem] bottom-[-56rem]'>
          <img className='mx-auto my-8 flex' src={fixigo} alt="" />
        </div>
        <div className='bg-white w-20 sm:w-60 h-28 absolute right-8 sm:left-[52rem] bottom-[-56rem]'>
          <img className='mx-auto my-8 flex' src={jarvison} alt="" />
        </div>
      </div>
      <Footer/>
    </>
  );
}
