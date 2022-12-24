import React, { useContext,useEffect } from 'react'
import { data } from '../Store'
import './App.css'
import AOS from "aos";

const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, [])

  let { mode, useMode } = useContext(data)
  return (
    <>
      <div id='Home'>
        <div className={`container-fluid bg-${mode ? 'dark' : 'light'}`} style={{ marginTop: "62px"}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="IMAGES/developer-getty-removebg-preview.png" alt="" width="100%" />
              <br /><br />
            </div>
            <div className={`col-lg-6 text-${mode ? 'light' : 'dark'}`}>
              <h1 data-aos="fade-left" >Front-End Developer</h1>
              <p style={{textAlign:'justify'}}>A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design,
                technology and programming to code a website's appearance, as well as taking care of debugging.
              </p>
              <br /><br />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Home
