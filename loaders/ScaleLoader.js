import React from 'react'
import '../css/ScaleLoader.css'

const ScaleLoader = ({ color = "black" }) => {
    const style = {
        backgroundColor: `${color} `
    }
    return (
        <div class="spinner">
            <div class="rect1" style={style}></div>
            <div class="rect2" style={style}></div>
            <div class="rect3" style={style}></div>
            <div class="rect4" style={style}></div>
            <div class="rect5" style={style}></div>
        </div>
    )
}

export default ScaleLoader
