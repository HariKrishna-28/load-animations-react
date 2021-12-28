import React from 'react'
import '../css/BoxLoader.css'

const BoxLoader = ({ color = "black" }) => {
    return (
        <div className="spinner"
            style={{ backgroundColor: color }}>
        </div>
    )
}

export default BoxLoader
