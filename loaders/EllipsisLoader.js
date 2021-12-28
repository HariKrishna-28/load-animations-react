import React from 'react'
import '../css/EllipsisLoader.css'

const EllipsisLoader = ({ color = "black" }) => {

    const style = {
        backgroundColor: color
    }
    return (
        <div className="lds-ellipsis">
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
        </div>
    )
}

export default EllipsisLoader
