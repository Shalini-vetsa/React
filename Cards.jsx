import React from "react"
import './Cards2.css'
import viteLogo from '/vite.svg'
const Cards=()=>{
    var card = [
        {
            "image" : viteLogo,
            "price" : 200,
            "brand" : 'Thub'
        },
        {
            "image" : viteLogo,
            "price" : 300,
            "brand" : 'Aditya'
        },
        {
            "image" : viteLogo,
            "price" : 400,
            "brand" : 'College'
        },
        {
            "image" : viteLogo,
            "price" : 400,
            "brand" : 'School'
        }
    ]
    return(
        <>
            {
                card.map(ele=>
                    <div className="card">
                        <div className="image">
                            <img src={ele.image} height="60px"/>
                        </div>
                        <div className="price">Price : {ele.price}</div>
                        <div className="brand">Brand : {ele.brand}</div>
                    </div>
                )
            }
        </>
    )
}
export default Cards;