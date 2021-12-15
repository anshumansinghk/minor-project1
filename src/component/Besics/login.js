import React from 'react'
import "./style2.css"

const login = () => {
    return (
        <>
    {/* <h1 className="head">Login </h1> */}
    <form action="/Resturant" className="head">
    <img class="img" src="https://image.shutterstock.com/image-vector/restaurant-logo-template-260nw-1254530365.jpg"></img>
    <h1 className="head">Login</h1>
        <lable for="fname">Username:</lable><br></br>
        <input type="text"  required="required"></input><br></br>
        <lable for="fname">Password:</lable><br></br>
        <input type="text" required="required"></input><br></br><br></br>
        <input classname="button" type="submit" href="/Resturant"></input><br></br>
        {/* <a class="b" href="/Resturant" >Login</a> */}
        {/* <button href="/Resturant">Submit</button> */}
    </form>


</>
  )
  }

export default login
