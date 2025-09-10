import React from 'react'
const Function=(prop)=>{
    console.log(prop);
    return(
        <>
            <h1>{prop.mydata}{prop.value}</h1>
        </>
    )
}
export default Function;