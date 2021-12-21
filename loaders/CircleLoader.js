import React from 'react'
import '../css/CircleLoader.css'

const CircleLoader = ({ color = "black" }) => {
    const style = {
        borderColor: `${color} transparent`
    }
    return (
        <div class="loader" style={style}></div>
    )
}

export default CircleLoader
