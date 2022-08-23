import React from 'react'
import mainImage from "./FZcx9hQXEAAuIPH.jpg"
import "./Card.css"

export default function CardHeader() {
    return (
        <div className="headerImgContainerDiv">
            <img src={mainImage} className='mainImage' alt='' />
        </div>
    )
}
