import { useState} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo1 from './image/Logo1.png';
import Logo from './image/Logo.png';


export default function Top() {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
      };

     const textColor = isLightMode ? 'text-black' : 'text-white';
     const image = isLightMode ? Logo1 : Logo;
    
     return (
        <>
         <Link to="/head">
        <img
             className={`object-cover object-center h-15 w-15 mt-12 sm:mt-20 ml-12 sm:ml-20 `}
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
             </div></>

   
     );
    }    