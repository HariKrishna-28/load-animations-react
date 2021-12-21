import React from 'react'
import '../css/ClimbLoader.css'

const ClimbLoader = ({ color = "black" }) => {
    return (
        <div id="loader"  >
            <div id="box" style={{
                border: `0.25em solid ${color}`
            }}></div>
            <div id="hill" style={{
                borderLeft: `0.25em solid ${color}`
            }}></div>
        </div>
    )
}

export default ClimbLoader
