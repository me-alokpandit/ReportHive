import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopNav = () => {
  return (
    <>
        <div className="row justify-content-around top-item">
  <div className="col-sm-4 text-light p-3 pt-1 fs-4">tripathisatyendra700@gmail.com</div>
  <div className="col-sm-4  pt-1">
   
   <a className='text-light p-4 fs-4' href="https://www.facebook.com/"><FaFacebookF /></a>
   <a className='text-light p-4 fs-4' href="https://www.youtube.com/"><IoLogoYoutube /></a>
   <a className='text-light p-4 fs-4' href="https://www.google.com/"><FaGoogle /></a>
   <a className='text-light p-4 fs-4' href="https://www.youtube.com/"><FaInstagram /></a>
   </div>
</div>
    </>
  )
}

export default TopNav;