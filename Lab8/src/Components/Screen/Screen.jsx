import React from 'react'
import './Screen.css'
const Screen = ({text}) => {
    let display = text.substring(0,9)
    return (
        <div className = 'Screen'>
            <h1 className='text'> {display}</h1> 
        </div>
    )
}

export default Screen