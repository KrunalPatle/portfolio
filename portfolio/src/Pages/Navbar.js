import React, { useContext } from 'react'
import {BsPersonBoundingBox } from "react-icons/bs";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { data } from '../Store';

const Navbar = () => {

    let {mode,setMode}=useContext(data)

    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg shadow" style={{background:'linear-gradient(to bottom, #ffff99 0%, #ffff00 100%)', fontWeight:'bold'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><BsPersonBoundingBox style={{fontSize:'30px',background:'linear-gradient(to top, #ffff00 0%, #ff9900 100%)',color:'#000000'}} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-center mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#Skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#Contact">Contact</a>
                            </li>  
                        </ul>
                        <div className="d-flex justify-content-center" role="search">
                            <button className='bg-warming rounded' onClick={()=>setMode(!mode)}>{mode?<BsFillMoonFill style={{color:'Gray'}}/>:<BsFillSunFill style={{color:'Orange'}}/>}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar