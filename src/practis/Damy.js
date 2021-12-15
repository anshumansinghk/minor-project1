import React from 'react'
import "./style3.css"
const Damy = () => {
    return (
        <>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  
    <a class="navbar-brand" href="#" ></a>
    <i class="fab fa-facebook"></i>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Facebook" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
        
        <i class="fas fa-home"></i>
        <i class="fab fa-youtube"></i>
        <i class="fas fa-users"></i>
        <i class="fas fa-headset"></i>
    
        <div>
        <button className="btn">Anshuman</button>
        </div>
        <i class="fab fa-facebook-messenger"></i>
        <i class="fas fa-dice-six"></i>
        <i class="fas fa-bell"></i>
        <i class="fas fa-caret-down"></i>
        
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default Damy
