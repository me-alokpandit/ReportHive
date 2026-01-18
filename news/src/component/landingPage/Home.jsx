import React from 'react'
import Slider from './Slider';
import NewsCategory from './NewsCategory';
import NewsDetails from './NewsDetails';
import LatestNews from './LatestNews';
import LatestVideos from './LatestVideos';
import City from  './City';
import ImageGallery from './ImageGallery';
import ContactUs from './contactUs';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
<NewsCategory/>
<LatestNews/>
<LatestVideos/>
<City/>
<ImageGallery/>
<AboutUs/>
    </>
  )
}

export default Home