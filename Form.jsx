import React from "react"
const Form=()=>{
    return(
        <>
            <h1>Form</h1>
            <label>Name: </label>
            <input type='text' placeholder="name"  />
            <br />

            <label>Roll Number: </label>
            <input type='text' placeholder="Roll Number"  />
            <br />

            <label>Gender: </label>
            <input type='radio' name='g' />
            <label>Male</label>
            <input type='radio' name='g' />
            <label>Female</label>
            <br />

            <label>Email: </label>
            <input type='text' placeholder="Email" />
            <br />

            <label>Phone Number: </label>
            <input type='number' placeholder="Phone Number"/>
            <br />

            <label>Date of Birth: </label>
            <input type='date' placeholder='date of birth' />       
            <br />     
            
        </>
    )
}
export default Form;