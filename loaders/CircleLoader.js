import React from 'react'
import '../css/CircleLoader.css'

const CircleLoader = ({ color = "black" }) => {
    const style = {
        borderTop: `13px solid ${color}`,
        borderBottom: `13px solid ${color}`
    }
    return (
        <div class="loader" style={style}></div>
    )
}

export default CircleLoader
