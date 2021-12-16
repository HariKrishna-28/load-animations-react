import React from 'react'
import '../css/CircleSpinner.css'


const CircleLoader = ({ color = "black" }) => {
    return (
        <div class="circle" >
            <div style={{ backgroundColor: color }} ></div>
        </div>

    )
}

export default CircleLoader
