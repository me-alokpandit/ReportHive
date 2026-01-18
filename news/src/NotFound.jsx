import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './component/landingPage/Navbar';
const NotFound = () => {
    const navigate=useNavigate()
    useEffect(()=>{
    //  navigate('/login');
    },[])
  return (<>
     <Navbar/>  
    <div className="row">
    
        <div className="col-sm-12 text-center">
           <h1 className='text-center shadow-lg notfound text-mycolor'>404 Not Found</h1>
        </div>
     
    </div>
     </>
  )
}

export default NotFound;