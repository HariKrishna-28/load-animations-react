import React from 'react'
import "../css/GridLoader.css"

const GridLoader = ({ color = "black" }) => {
    const style = {
        backgroundColor: color
    }

    return (
        <div class="lds-grid">
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
        </div>
    )
}

export default GridLoader
