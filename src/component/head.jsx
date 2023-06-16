import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo1 from './image/Logo1.png';
import Logo from './image/Logo.png';
import Group from './image/Group.png';
import img from './image/img.png';
import fixigo from './image/fixigo.png';
import jarvison from './image/jarvison.png';
import Tech from './image/Tech.png';
import Story from './ourstory';
 
export default function Head() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setErrorMessage('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Invalid email format');
    } else {
      setErrorMessage('');
      console.log('Email:', email);
    }
  };

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const bgColor = isLightMode ? 'bg-white' : 'bg-customblue';
  const textColor = isLightMode ? 'text-black' : 'text-white';
  const image = isLightMode ? Logo1 : Logo;
  
  return (
    <Router>
      <div className={`h-screen overflow-hidden ${bgColor}`}>
        <img
          className={`object-cover object-center h-15 w-15 mt-12 sm:mt-20 ml-12 sm:ml-20 `}
          src={image}
          alt="Logo"
        />
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
        <button className="bg-blue-500 text-white py-1 px-8 rounded-xl mt-4 sm:mt-8 ml-[5rem] sm:ml-20 flex items-center justify-center">
          Explore
        </button>
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
        <div className="absolute top-80 sm:top-36 right-7 sm:right-24  h-5/6 w-2/6 ">
          <img src={Group} alt="Logo" />
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
      <div className='h-96 bg-customblue opacity-80 '>
        <div className="relative bottom-[1450px]">
          <img className='mx-6 md:mx-20 absolute top-[1530px]' src={Logo} alt="" />
          <p className='text-white mx-6 md:mx-20 absolute top-[1620px]'>Enter your email here and get updated about our latest</p>
          <p className='text-white mx-6 md:mx-20 absolute top-[1640px]'>news and activities</p>
        
        <div className="mx-2 md:mx-16 absolute top-[1690px] p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                className="w-full border p-2 mr-2"
              />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Submit
              </button>
            </div>
            {errorMessage && <p className="text-white mt-2">{errorMessage}</p>}
          </form>
        </div>
        </div>
        <div className="relative bottom-[1450px]">
          <p className='text-xl text-white mx-6 md:mx-20 absolute right-[30rem] top-[1530px] '>Links</p>
          <ul className='text-white absolute  mx-6 md:mx-20 right-[28rem] top-[1590px]'>
            <li className="mx-2 md:mx-4">
              <Link to="/component/ourstory">Our Story</Link>
            </li>
            <li className="mx-2 md:mx-4 pt-4">
              <Link to="/solution">Solution</Link>
            </li>
            <li className="mx-2 md:mx-4 pt-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="relative bottom-[1450px]">
        <p className='text-xl text-white mx-6 md:mx-20 absolute right-[17rem] top-[1530px] '>Contact</p>
        <p className='text-white mx-6 sm:mx-20 absolute right-[14.5rem] top-[1590px] '>+91 78458 99580</p>
        <p className='text-white mx-6 sm:mx-20 absolute right-[9.2rem] top-[1620px] '>contact@adecinfocomm.com</p>
        <p className='text-white mx-6 sm:mx-20 absolute right-[10.1rem] top-[1660px] '>5th Floor, Jayabheri Silicon</p>
        <p className='text-white mx-6 sm:mx-20 absolute right-[7.9rem] top-[1680px] '>Towers, Kothaguda, Hitech City,</p>
        <p className='text-white mx-6 sm:mx-20 absolute right-[8.4rem] top-[1700px] '>Hyderabad, Telangana 500032</p>
      </div>
      </div>
      <Routes>
         <Route path="/ourstory" component={Story} /> 
      </Routes>
     
    </Router>
  );
}

