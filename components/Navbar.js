/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { MdAccountCircle } from 'react-icons/md';
import { useState, useEffect ,useRef} from 'react';
import Router from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [dropDown, setdropDown] = useState(false);
  const [data, setdata] = useState([]);
  const [sw, setsw] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const [login, setlogin] = useState(false)
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [method, setmethod] = useState("login");
  const [name, setname] = useState("");
  const [user, setuser] = useState({value:null});


  useEffect(() => {
    if(localStorage.getItem("token")){
      setuser({value:true})
    }
  }, []);

  const logout=()=>{
    localStorage.removeItem("token")
    setuser({value:null})
    Router.push("/")
  }

  return (<>


    {dropDown && <div onMouseLeave={() => setdropDown(false)}  className='rounded-lg absolute text-black duration-300 transition-all  top-[12vh] right-[4vh] font-medium z-50 2xl:text-2xl py-[2vh] bg-white  shadow-black shadow-sm '>
      <ul>

        <li className='md:px-[4vh] py-[2vh] cursor-pointer hover:bg-[#565fa1]  hover:text-white' onClick={logout}>Logout</li>
      </ul>
    </div>}

   

    <nav  className='flex justify-between md:px-6'>

      <div onClick={()=>Router.push("/")} className='flex z-30 cursor-pointer justify-center md:justify-start items-center'>
        <img className='w-[15vw] md:w-[15vh]' src="https://img.icons8.com/clouds/100/000000/github.png" />
        <h1 className='text-[4vw] md:text-[4vh]' style={{ margin: "0vh" }}>Repos Finder</h1>
      </div>

      <div className='flex z-50 text-[3vw] md:text-[3vh] items-center justify-between w-1/4'>
        <div onClick={()=>Router.push("/")} className='cursor-pointer'>Home</div>
        <div onClick={()=>Router.push("/about")} className='cursor-pointer'>About</div>
        <div onClick={()=>Router.push("/contact")} className='cursor-pointer'>Contact</div>
        {!user.value && <a id="login" onClick={() => Router.push("/Login")} className="z-50   text-[3vh] cursor-pointer hover:opacity-80  hover: transition duration-300">Log In</a>}
        {user.value && <MdAccountCircle className=" text-[4.5vh] cursor-pointer transition  duration-300 z-50 " onMouseEnter={() => setdropDown(true)} />}
      </div>





    </nav>
  </>
  );
}
export default Navbar