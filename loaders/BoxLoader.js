import React from 'react'
import '../css/BoxLoader.css'

const BoxLoader = ({ color = "black" }) => {
    return (
        <div class="spinner"
            style={{ backgroundColor: color }}>
        </div>
    )
}

export default BoxLoader
