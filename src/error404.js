import React from 'react'
import { NavLink } from 'react-router-dom'
const Error404 = () => {
    return (
        <>
          <div id="notfound">
              <div className="notfound">
                  <div className="notfound-404">
                      <h1>404</h1>
                      <h2>WE ARE SORRY ,PAGE NOT FOUND!</h2>
                      <p>
                          THE PAGE YOU LOOKING FOR MIGHT HAVE BEEN REMOVED HAS ITS NAME 
                          CHANGED OR ITS TEMPORARY UNAVAILABE.
                          <NavLink to="/">Back to home page</NavLink>
                      </p>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Error404
