// import { useContext, useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/LogoApp.svg';
import burg from '../../assets/Burg.svg';




function header ({ title }) {
  return (
    <div className='bg-greenColor flex justify-center justify-between h-full ' >
    <div className='flex'>
      <img src={burg} alt="burg" className='burg w-5 ml-5 md:w-8'/>
      <img src={logo} alt="logo" className='w-10 md:w-12 ml-5'  />
      </div>
      <div className="m:auto flex mt-2 text-xl  md:text-3xl ">
        <h1>{ title }</h1>
      </div>
      <div className='flex'>
      <button className='h-8 p-1 md:h-10 w-18 md:w-20 mr-5 mt-2 mb-2 rounded-md bg-blackColor text-white button'> Sign Up
      </button>
      <button className='h-8 p-1 md:h-10 w-18 md:w-20 mr-5 mt-2 mb-2 rounded-md bg-blackColor text-white button'> Sign In
      </button>
      </div>
    </div>
  )
}

export default header ;