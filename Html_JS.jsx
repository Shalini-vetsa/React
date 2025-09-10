import React from "react"
const fun=()=>{
    var card = ['Orange','Banana','Apple']
    return(
        <>
            <ol>
                {
                    card.map(ele=>
                        <li>{ele}</li>
                    )
                }
            </ol>
        </>

    )
}
export default fun;