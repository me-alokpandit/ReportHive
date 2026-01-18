
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { TbCashRegister } from "react-icons/tb";
import { LuLogIn } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    setUserInfo(userData)
  }, [])
  const logOut = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  }
  if (userInfo?.userType == "user") {
    return (<>
      <nav className="nav navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon" />
          </button>

          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active text-mycolor fs-4" aria-current="page" to="/user-alllist">
                <FaRegNewspaper />
                userAllNewsList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-mycolor fs-4" aria-current="page" to="/user-profile">
                <FaUserEdit /> UserEditProfile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-mycolor fs-4" aria-current="page" to="/user-addnews">
                <FaRegNewspaper />
                PostNews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-mycolor fs-4" aria-current="page" to="/user-list">
                <FaRegNewspaper />
                YourNews
              </Link>
            </li>


            <li className="nav-item " onClick={logOut}>
              <Link className="nav-link active text-mycolor fs-4" aria-current="page" >
                <RiLogoutCircleFill />userLogout
              </Link>
            </li>



          </ul>


        </div>
      </nav>
    </>
    )
  } else if (userInfo?.userType == "admin") {
    return (
      <>
        <nav className="nav navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >

              <span className="navbar-toggler-icon" />
            </button>

            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin-newslist">
                  AllNews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin-profile">
                  EditProfile
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin-contactus">
                  AdminContactUsList
                </Link>
              </li>

              <li className="nav-item" onClick={logOut}>
                <Link className="nav-link active" aria-current="page" >
                  AdminLogout
                </Link>
              </li>



            </ul>

          </div>

        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav className="nav navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active text-mycolor fs-4" aria-current="page" to="/">
                  <b><FaHome /> Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-mycolor fs-4" to="/about">
                  <b> <BiCommentDetail />About</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-mycolor fs-4" to="/news">
                  <b>
                    <IoNewspaperOutline /> News</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-mycolor fs-4" to="/gallery">
                  <b> <GrGallery />Gallery</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-mycolor fs-4" to="/contact">
                  <b><IoIosContact />Contact</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-mycolor fs-4" to="/registration">
                  <b><TbCashRegister />Register</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-mycolor fs-4" to="/login">
                  <b><LuLogIn />Login</b>
                </Link>
              </li>

            </ul>

          </div>

        </nav>

      </>
    )
  }


}

export default Navbar