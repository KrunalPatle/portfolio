import React, { useContext,useEffect } from 'react'
import Heading from '../Common/Heading'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact } from "react-icons/si";
import { data } from '../Store';
import AOS from "aos";

const Skills = () => {
    let { mode, setMode } = useContext(data)

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])

    let obj = [
        {
            id: 1,
            Icon: <SiHtml5 />,
            Heading: "HTML",
            Colour: "red"
        },
        {
            id: 2,
            Icon: <SiCss3 />,
            Heading: "CSS",
            Colour: "blue"
        },
        {
            id: 3,
            Icon: <SiBootstrap />,
            Heading: "BOOTSTRAP",
            Colour: "purple"
        },
        {
            id: 4,
            Icon: <SiJavascript />,
            Heading: "JAVASRIPT",
            Colour: "yellow"
        },
        {
            id: 5,
            Icon: <SiReact />,
            Heading: "REACT",
            Colour: "#0B9CEA"
        }
    ]
    return (
        <>
            <div id='Skills'>
                <div className={`container-fluid bg-${mode?'dark':'light'} text-${mode?'light':'dark'}`}>
                    <Heading h1="Skills" h2="My Skills" />
                    <div className="row justify-content-evenly">
                        {
                            obj.map((e) => {
                                return (
                                    <div className="col-md-5 mb-3 text-center" key={e.id}>
                                        <div className="card" data-aos="flip-down" style={{background:'linear-gradient(to top, #ffffcc 0%, #ffff66 100%)'}}>
                                            <div style={{ fontSize: '65px', color: e.Colour }}>{e.Icon}</div>
                                            <div className="card-body">
                                                <h4 className='card-text text-dark icontext' >{e.Heading}</h4>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills