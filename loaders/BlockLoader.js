import React from 'react'
import '../css/BlockLoader.css'

const BlockLoader = ({ color = "black" }) => {
    return (
        <div className="ldr">
            <div className="ldr-blk" style={{ backgroundColor: `${color}` }}></div>
            <div className="ldr-blk an_delay" style={{ backgroundColor: `${color}` }}></div>
            <div className="ldr-blk an_delay" style={{ backgroundColor: `${color}` }}></div>
            <div className="ldr-blk" style={{ backgroundColor: `${color}` }}></div>
        </div>
    )
}

export default BlockLoader
