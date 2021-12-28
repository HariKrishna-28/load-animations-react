import React from 'react'
import "../css/RotateLoader.css"

const RotateLoader = ({ color = "black" }) => {
    const style = {
        backgroundColor: color
    }
    return (
        <div className="lds-default">
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
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

export default RotateLoader
