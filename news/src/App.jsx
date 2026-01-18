import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useLocation, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/landingPage/Navbar';
import Home from './component/landingPage/Home';
import Login from './component/landingPage/Login';
import NewsDetails from './component/landingPage/NewsDetails';
import AboutUs from './component/landingPage/AboutUs';
import NewsCategory from './component/landingPage/NewsCategory';
import ImageGallery from './component/landingPage/ImageGallery';
import ContactUs from './component/landingPage/contactUs';
import UserRegister from './component/landingPage/UserRegister';
import EditProfile from './component/userComponent/EditProfile';
import AllNews from './component/adminComponent/AllNews';
import AdminContactUsList from './component/adminComponent/AdminContactUsList';
import UserEditProfile from './component/adminComponent/EditProfile';
import PostNews from './component/userComponent/PostNews';
import YourNews from './component/userComponent/YourNews';
import UserAllNewsList from './component/userComponent/UserAllNewsList';
import TopNav from './component/landingPage/TopNav';
import Logo from './component/landingPage/Logo';
import Footer from './component/landingPage/Footer'
import { useEffect, useState } from 'react';
import NotFound from './NotFound';

function App() {
  const location=useLocation()
  const [userData,setUserData]=useState(null);
  useEffect(()=>{
  const user=JSON.parse(localStorage.getItem('userInfo'));
   setUserData(user);
  },[location])
  console.log(userData,'sdfghjkl');
  

  
  return (
    <>

        <TopNav />
        <Logo />

        <Routes>
          {/* LandingPage */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/news-details' element={<NewsDetails />} />
          <Route path='/gallery' element={<ImageGallery />} />
          <Route path='/News' element={<NewsCategory />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/registration' element={<UserRegister />} />
          <Route path='/login' element={<Login />} />
          {/* Admin Route */}
       {userData?.userType=="admin" && <>
          <Route path='/admin-profile' element={<EditProfile />} />
          <Route path='/admin-newslist' element={<AllNews />} />
          <Route path='/admin-contactus' element={<AdminContactUsList />} />
          </>}

          {/* UserROute */}
         {userData?.userType=="user" && <>
          <Route path='/user-profile' element={<><UserEditProfile /> </>} />
          <Route path='/user-addnews' element={<PostNews />} />
          <Route path='/user-list' element={<YourNews />} />
          <Route path='/user-alllist' element={<UserAllNewsList />} />
         </>}

<Route path='*' element={<h5><NotFound/></h5>} />
        </Routes>
        <Footer />
    
    </>
  )
}

export default App