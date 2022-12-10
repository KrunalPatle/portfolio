import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className='text-center p-3'>
                <h4>{props.h1}</h4>
                <h2>{props.h2}</h2>
            </div>
        </>
    )
}

export default Heading