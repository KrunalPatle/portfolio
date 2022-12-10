import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { AiFillGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook } from "react-icons/ai";
import Heading from '../Common/Heading';
import axios from 'axios'
import AOS from "aos";

const Contact = () => {

  let { register, handleSubmit, formState: { errors },reset } = useForm()

  let onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data);
    axios.post("https://myweb-62819-default-rtdb.firebaseio.com/contact.json", data)
    reset()
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <>
      <div id="Contact">
        <div className="container-fluid bg-warning">
          <Heading h1="Contact" h2="Share Your Info" />
          <div className="row justify-content-between">
            <div className="col-md-5">
              <h2 data-aos="fade-right">Let's Get In Touch...</h2>
              <p style={{textAlign:'justify'}}>I enjoy discussing new projects and design challenges.
                Please share as much info, as possible so we can get the most out of our first catch-up.
              </p>
              <br />
              <h4 id='conth4'>Living In:</h4>
              <p>Nagpur, Maharashtra</p>
              
              <h4 id='conth4'>Call:</h4>
              <p>(+91) 8412963216</p>
              <br />
              <a href="https://www.linkedin.com/in/krunal-patle-b985031b5/" target="_blank" data-aos="zoom-in-up" style={{ color: "black" }} ><AiFillLinkedin style={{ fontSize: "40px" }} /></a>
              <a href="https://github.com/KrunalPatle" target="_blank" data-aos="zoom-in-up" style={{ color: "black" }} ><AiFillGithub style={{ fontSize: "40px" }} /></a>
              <a href="https://twitter.com/KrunalSPatle1?t=M7mE6H4ItSznqJxGLqYfyg&s=08 " target="_blank" data-aos="zoom-in-up" style={{ color: "black" }} ><AiFillTwitterCircle style={{ fontSize: "40px" }} /></a>
              <a href="https://www.facebook.com/krunal.patle.37" target="_blank" data-aos="zoom-in-up" style={{ color: "black" }} ><AiFillFacebook style={{ fontSize: "40px" }} /></a>

            </div>
            <div className="col-md-6 shadow">
              <form action="" className='p-3' onSubmit={handleSubmit(onSubmit)} data-aos="flip-down">
                <label htmlFor="" className='form-labbel'>Enter Name</label>
                <input type="text" className='form-control' name='Name' {...register("Name",{required:"Name is required"})} />
                <p className='text-danger'>{errors.Name?.message}</p>
                <br />
                <label htmlFor="" className='form-labbel'>Enter Email</label>
                <input type="text" className='form-control' name='Email' {...register("Email",{required:"Email is required"})} />
                <p className='text-danger'>{errors.Email?.message}</p>
                <br />
                <label htmlFor="" className='form-labbel'>How Can I Help You</label>
                <input type="text" className='form-control' name='Message' {...register("Message",{required:"Please write somthing"})} />
                <p className='text-danger'>{errors.Message?.message}</p>
                <br />
                <input type="submit" className='btn btn-outline-success  button' />
              </form>
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact