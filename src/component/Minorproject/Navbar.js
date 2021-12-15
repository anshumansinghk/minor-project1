import React from 'react'
import "./minorstyle.css"

const Navbar = () => {
    return (
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="float-right element">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Breakfast</a> */}
          <button class="nav-link active" aria-current="page" href="#">Breakfast</button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Lounch</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled">Dinner</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">All</a>
        </li>
      </ul>
      
    </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
