import AOS from "aos";
import React, { useContext, useEffect } from 'react'
import Heading from '../Common/Heading'
import { data } from '../Store'

const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    let { mode, useMode } = useContext(data)

    let Data = [
        {
            id: 1,
            heading: "Name:",
            content: "Krunal S. Patle",
            colour: "primary"
        },
        {
            id: 2,
            heading: "Email:",
            content: "krnlpatle@gmail.com",
            colour: "warning"
        },
        {
            id: 3,
            heading: "Date Of Birth:",
            content: "28 AuG 1996",
            colour: "primary"
        },
        {
            id: 4,
            heading: "From:",
            content: "Tumsar",
            colour: "warning"
        }
    ]
    return (
        <>
            <div id='About'>
                <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark  '} `}>
                    <Heading h1="About Me" h2="Know Me More" />
                    <div className="row align-items-center">
                        <div className="col-7">
                            <h1 data-aos="fade-right">Hi I'm Krunal Patle</h1>
                            <p style={{textAlign:'justify'}}>A budding front end developer with a strong interest in projects that require both conceptual and analytical thinking. I am always eager
                                to learn from anyone & everyone. I'm looking forward to enhance user's experience & maximizing user interface.</p>
                        </div>
                        <div className="col-5">
                            <img src="IMAGES/giphy.gif" alt="" width="100%" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            Data.map((e) => {
                                return (
                                    <div className="col-sm-6 col-xl-3" key={e.id}>
                                        <div className={`card p-2 text-bg-${e.colour} mb-3`} data-aos="fade-down">
                                            <div
                                                className="card-header" style={{ fontWeight: "bold" }}>{e.heading}
                                            </div>
                                            <div className="card-body" style={{fontFamily:'cursive'}}>
                                                <h5 className="card-title">{e.content}</h5>
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

export default About