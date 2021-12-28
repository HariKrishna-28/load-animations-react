import React from 'react'
import '../css/FlipSpinner.css'


const CircleLoader = ({ color = "black" }) => {
    return (
        <div className="circle" >
            <div style={{ backgroundColor: color }} ></div>
        </div>

    )
}

export default CircleLoader
