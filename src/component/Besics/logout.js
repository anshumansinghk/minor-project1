import React from 'react'
import "./style2.css"
const logout = () => {
    return (
        <>
    <form action="/Resturant" className="head">
    <img class="img" src="https://image.shutterstock.com/image-vector/restaurant-logo-template-260nw-1254530365.jpg"></img>
    <h1 className="head">CreateAccount</h1>
        <lable for="fname">Fastname:</lable><br></br>
        <input type="text"  required="required"></input><br></br>
        <lable for="fname">Lastname:</lable><br></br>
        <input type="text"  required="required"></input><br></br>
        <lable for="fname">Email:</lable><br></br>
        <input type="text"  required="required"></input><br></br>
        <lable for="fname">Mobilenumber:</lable><br></br>
        <input type="text" required="required"></input><br></br><br></br>

        <input type="submit" href="/Resturant"></input><br></br>
        {/* <a class="b" href="/Resturant" >Login</a> */}
        {/* <button href="/Resturant">Submit</button> */}
    </form>
        </>
    )
}

export default logout
