import React from 'react'
import '../css/ScaleLoader.css'

const ScaleLoader = ({ color = "black" }) => {
    const style = {
        backgroundColor: `${color} `
    }
    return (
        // <div className="spinner">
        //     <div className="rect1"></div>
        //     <div className="rect2"></div>
        //     <div className="rect3"></div>
        //     <div className="rect4"></div>
        //     <div className="rect5"></div>
        // </div>
        <div className="scale-spinner">
            <div className="rect1" style={style}></div>
            <div className="rect2" style={style}></div>
            <div className="rect3" style={style}></div>
            <div className="rect4" style={style}></div>
            <div className="rect5" style={style}></div>
        </div>
    )
}

export default ScaleLoader
