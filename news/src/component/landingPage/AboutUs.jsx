import React from 'react'
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const location = useLocation()
  return (
    <>
      {location?.pathname !== "/" && <Navbar />}
      <div className='row py-2'>
        <p className='fs-3 shadow-lg text-center'>About <b className='text-mycolor'>Us</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className="row py-3">
            <div className="col-sm-6 pt-3">

              <p>Bharat News is a prominent Indian news platform committed to delivering accurate, timely, and unbiased news to the public. As India’s media landscape evolves rapidly with digital advancements and increasing public awareness, Bharat News has emerged as a trusted voice that bridges traditional journalism with modern technology. It serves a diverse audience across the country and abroad, focusing on national issues, regional developments, and global events that affect India.

                At its core, Bharat News is driven by the mission to inform, educate, and empower the citizens of India. The platform covers a wide range of topics including politics, economy, education, health, environment, technology, sports, and entertainment. By maintaining editorial integrity and prioritizing factual reporting, Bharat News has built a reputation for trustworthiness and reliability.

                One of the key strengths of Bharat News is its regional inclusivity. Unlike many national channels that focus primarily on urban and metro areas, Bharat News gives equal importance to rural voices and regional issues. It provides coverage in multiple Indian languages, thereby ensuring that people from different states, linguistic backgrounds, and cultural contexts can stay informed. This multilingual approach helps democratize information and foster a deeper sense of unity across the diverse population of India.</p>
            </div>
            <div className="col-sm-6"><iframe
 className='w-100'
 height={400}
  src="https://www.youtube.com/embed/TJmdfN9b0Bc?si=MQZuqVJx6gWJFpCh"
  title="YouTube video player"
  frameBorder={0}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen=""
/>

            </div>
          </div>
          <div className="row">
            <div className="col-sm-4"><img src="/cricket.webp" alt="Not Found" className='img-thumbnail w-100 aboutimg' /></div>
            <div className="col-sm-8 pt-2">
              <p>The platform also focuses on current affairs, government policies, and issues affecting everyday citizens. In the entertainment section, it offers updates on movies, television, celebrity news, and cultural events. Bharat News is accessible through television, website, and mobile apps, making it easy for people to stay informed on the go. Its social media presence and live-streaming features enhance audience engagement. Committed to ethical journalism, Bharat News stands as a reliable source for accurate and diverse news, keeping the spirit of informed democracy alive.</p>
            </div>

          </div>
          <hr />
          <div className='row py-3'>
            <p className='fs-3 text-center'>Our Vision <b className='text-mycolor'>& Mission</b></p>
            <div className="col-sm-12">
              <p className='text-center'>Bharat News envisions becoming the most trusted and inclusive news platform in India, dedicated to empowering citizens through accurate, unbiased, and accessible information. It aims to bridge the gap between urban and rural voices, fostering national unity through multilingual and regionally diverse content. Bharat News aspires to be a beacon of responsible journalism, promoting truth, transparency, and democratic values while embracing modern technology to reach every corner of the nation.


                The mission of Bharat News is to inform, educate, and engage the public by delivering timely and credible news across various domains such as politics, sports, health, economy, and entertainment. It strives to uphold journalistic integrity, combat misinformation, and provide a platform for all communities. Through digital innovation and a commitment to ethical reporting, Bharat News seeks to inspire active citizenship and contribute to the progress and unity of a vibrant, informed India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs