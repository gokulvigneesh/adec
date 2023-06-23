import { useState } from "react"; 
import Logo from './image/Logo.png';
import { Link } from 'react-router-dom';


 
export default function Head() {
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

  return (
    <>
      
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
              <Link to="/ourstory">Our Story</Link>
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
    
    </>
  );
}
