import { useState } from "react";
import Logo1 from './image/Logo1.png';
import Logo from './image/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from './footer'


export default function Contact(){
    const [isLightMode, setIsLightMode] = useState(false); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errors, setErrors] = useState({});



    const toggleMode = () => {
        setIsLightMode(!isLightMode);
      };

      const validateForm = () => {
        const errors = {};
    
        if (name.trim() === '') {
          errors.name = 'Name is required';
        }
    
        if (email.trim() === '') {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Invalid email format';
        }
    
        if (date.trim() === '') {
          errors.date = 'Date is required';
        }
    
        if (time.trim() === '') {
          errors.time = 'Time is required';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (validateForm()) {
          console.log('Form submitted successfully');
        }
      };
    
       
      const bgColor1 = isLightMode ? 'bg-customgrey' : 'bg-black';
      const bgColor2 = isLightMode ? 'bg-custompurple' : 'bg-customblue';
      const bgColor3 = isLightMode ? 'bg-white' : 'bg-customblack';
      const textColor = isLightMode ? 'text-black' : 'text-white';
      const textColor1 = isLightMode ? 'text-white' : 'text-black';
      const textColor2 = isLightMode ? 'text-white' : 'text-customblue';
      const image = isLightMode ? Logo1 : Logo;
     
      return(
        <>
        <div className={`h-[900px] overflow-hidden opacity-80 ${bgColor1}`}> 

            <Link to="/head">
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
             <div className="justify-center items-center text-center">
                <p className="text-custompurple text-2xl">C<span className={`text-xl ${textColor}`}>ontact</span></p>
                <p className={`${textColor}`}>Wanna Known More About Us?</p>

             </div>
             <div className={`h-[500px] w-[500px] rounded-xl mt-[40px] ml-[120px] ${bgColor3}`}>
              <p className={`pt-16 pl-6 ${textColor}`}>Schedule a call for more info</p>
              <form onSubmit={handleSubmit}>
            <div className="block">
                <input
                    type="text"
                    placeholder="Enter your name "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-[25%] border p-4 absolute left-[175px] top-[350px]  rounded-xl"               
                
                />
                     {errors.name && <p className="text-customered absolute top-[420px] ml-[2.5rem]">{errors.name}</p>}

              <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[25%] border p-4 absolute left-[175px] top-[450px] rounded-xl"  
              />
             
           
         
              {errors.email && <p className="text-customered mt-2 absolute top-[510px] ml-[2.5rem]">{errors.email}</p>}

            <input
          type="date"
          id="date"
          value={date}
          placeholder="dd/mm/yy"
          onChange={(e) => setDate(e.target.value)}
          className="w-[10%] border p-4 absolute left-[395px] top-[550px] rounded-xl"  
        />
         {errors.date && <p className="text-customered mt-2 absolute top-[610px] ml-[298px]">{errors.date}</p>}

         <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-[10%] border p-4 absolute left-[175px] top-[550px] rounded-xl"  
        />
        {errors.time && <p className="text-customered mt-2 absolute top-[610px] ml-[2.5rem]">{errors.time}</p>}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded absolute left-[320px] top-[650px]">
                Submit
              </button>
         </div>
          </form>
             </div>
             <div className="h-[250px] w-[300px] mt-[-501px] ml-[660px] bg-white rounded-xl">
               <p className="p-8">To connect with our <br/><span className="font-bold">Sales Manager</span></p>
               <div>
               <FontAwesomeIcon icon={faPhone} className="pl-8 pt-1" />
               <p className="mt-[-23px] ml-[60px]">+91 8015751743</p>
               <FontAwesomeIcon icon={faEnvelope} className="pl-8 pt-6"/>
               <p className="mt-[-23px] ml-[60px]">sales@adecinfocomm.com</p>
               <FontAwesomeIcon icon={faWhatsapp} className="pl-8 pt-8"/>
               <p className="mt-[-23px] ml-[60px]">+91 78458 99580</p>
               </div>
             </div>

             <div className="h-[250px] w-[300px] mt-[48px] ml-[940px] bg-white rounded-xl">
               <p className="p-8">To connect with our <br/><span className="font-bold">Sales Manager</span></p>
               <div>
               <FontAwesomeIcon icon={faPhone} className="pl-8 pt-1" />
               <p className="mt-[-23px] ml-[60px]">+91 8015751743</p>
               <FontAwesomeIcon icon={faEnvelope} className="pl-8 pt-6"/>
               <p className="mt-[-23px] ml-[60px]">sales@adecinfocomm.com</p>
               <FontAwesomeIcon icon={faWhatsapp} className="pl-8 pt-8"/>
               <p className="mt-[-23px] ml-[60px]">+91 78458 99580</p>
               </div>
             </div>
            </div>
            <Footer/>

        </>
      );
    }