import React from 'react'
import "../css/FaceBookLoader.css"

const FaceBookLoader = ({ color = "black" }) => {
    const style = {
        backgroundColor: `${color} `
    }

    return (
        <div class="lds-facebook">
            <div style={style}></div>
            <div style={style}></div>
            <div style={style}></div>
        </div>
    )
}

export default FaceBookLoader
