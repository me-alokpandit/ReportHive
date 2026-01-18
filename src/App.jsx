
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import TopNavbar from './components/landing page/TopNavbar';
import LogoSec from './components/landing page/LogoSec';
import Navbar from './components/landing page/Navbar';
import Home from './components/landing page/Home';
import About from './components/landing page/About';
import NewsCategory from './components/landing page/NewsCategory';
import NewsDetails from './components/landing page/NewsDetails';
import ImageGallery from './components/landing page/ImageGallery';
import ContactUs from './components/landing page/ContactUs';
import UserSignUp from './components/landing page/UserSignUp';
import SignIn from './components/landing page/SignIn';
import EditProfile from './components/adminComponent/EditProfile';
import AllNews from './components/adminComponent/AllNews';
import AdminContactUsList from './components/adminComponent/AdminContactUsList'; 
import UserEditProfile from './components/userComponent/UserEditProfile';
import PostNews from './components/userComponent/PostNews';
import YourNews from './components/userComponent/YourNews';
import UserAllNewsList from './components/userComponent/UserAllNewsList'; 


function App() {
  return (<>
    <BrowserRouter>
      {/* <TopNavbar />
      <LogoSec /> */}
      {/* <Navbar />   */}
      <Routes>
        {/*landing navbar*/}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about' element={<NewsCategory />} />
        <Route path='/news' element={<NewsDetails />} />
        <Route path='/gallery' element={<ImageGallery />} />
        <Route path='/contact' element={<ContactUs />} /> 
        <Route path='/UserSignUp' element={<UserSignUp />} />
        <Route path='/login' element={<SignIn />} />

        {/*admin route*/}
        <Route path='/admin-profile' element={<EditProfile />} />
        <Route path='/admin-newslist' element={<AllNews />} />
        <Route path='/admin-ContactUS' element={<AdminContactUsList />} /> 
        {/*user route*/} 
        <Route path='/user-profile' element={ <UserEditProfile/>} />
        <Route path='/user-addnews' element={<PostNews />} />
        <Route path='/user-list' element={<YourNews />} />
        <Route path='/user-alllist' element={<UserAllNewsList />} /> 
      </Routes>
    </BrowserRouter>

  </>)
}

export default App


