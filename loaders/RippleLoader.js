import React from 'react'
import "../css/RippleLoader.css"

const RippleLoader = ({ color = "black" }) => {

    const style = {
        border: `4px solid ${color} `
    }
    return (
        <div className="lds-ripple">
            <div style={style}></div>
            <div style={style}></div>
        </div>
    )
}

export default RippleLoader
