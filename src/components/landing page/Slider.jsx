import React from 'react'


import { IoNewspaperSharp } from "react-icons/io5";


function Slid(){
    return(<>
    <div className='Slid'>
        <div className='slid1' >






<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button> 
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> 
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/news slider.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/news slider2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/news slider3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






        </div>
        <div className='slid2'>
            <div className='s1'>Top  10 News <b style={{color:"#7F0000"}}>Headline  <IoNewspaperSharp /></b></div>
            <div className='s2'> 
                <div className='sl3'></div>
                <div className='sl4'>Lorem ipsum ::dolor sit amet 
                     adipisicing elit. 
                      nditiis asperior
                    andae..!! 
                    <br />
                    
                   <button className='form-button1'>view more</button>
                   <br />
                   Date:sep9,2024.
                    </div>



            </div>
            <div className='s3'>
                <div className='sl5'></div>
                <div className='sl6'>
               Lorem ipsum ::dolor sit amet 
                     adipisicing elit. 
                      nditiis asperior
                    andae..!! 
                    <br />
                    
                   <button className='form-button1'>view more</button>
                   <br />
                   Date:sep9,2024.

                </div>
            </div>
           
        </div>
    </div>
   
   
   
   
   
   
   
   
   
   
    </>)
}
export default Slid;