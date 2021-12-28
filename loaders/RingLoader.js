import React from 'react'
import "../css/RingLoader.css"

const RingLoader = ({ color = "black" }) => {
    const style = {
        borderColor: `${color} transparent transparent transparent`
    }

    return (
        <div className="lds-ring">
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
        </div>
    )
}

export default RingLoader
