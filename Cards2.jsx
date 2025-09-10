import React from 'react'
import './Cards2.css'
const Cards2=(ele)=>{
    return(
        <>
            <div className="card">
                <div className="image">
                    <img src={ele.data.image} height="60px"/>
                </div>
                <div className="price">Price : {ele.data.price}</div>
                <div className="brand">Brand : {ele.data.brand}</div>
            </div>
        </>
    )
}

export default Cards2;