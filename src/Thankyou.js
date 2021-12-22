import React from 'react'
import {Link} from "react-router-dom"
function Thankyou() {
    return (
        <div className="canvas">
  <header>   
    <img src="images/header.png" className="img-fluid" />    
  </header>
  <div className="main">
    <div className="banner bg-light pt-5">
      <div className="container mb-5">
      <Link to="/">
        <a  className="text-warning btn px-0 mb-2 fs-5"><i className="far fa-angle-left me-2" /> Back to Getting Started</a>
       </Link>
        <div className="row mt-4">
          <div className="col-md-6 mb-0 mb-md-5">
            <h2 className="fst-normal">Thank you
              <br />for Registering!</h2>
          </div>
          <div className="col-md-6 py-5 mb-5" />
          <div className="col-md-6 pt-0 pt-md-5 mt-0 mt-md-5">
            <i className="fal fa-check text-secondary fs-1 mt-0 mt-md-5" />
            <Link to="/">
            <h4>
            
              <a href="#" className="text-warning">Click here</a> to return to <br />
              the getting started portal.</h4>
              </Link>
          </div>
        </div> 
      </div>
    </div>
  </div>
  <footer>   
    <img src="images/footer.png" className="img-fluid" />    
  </footer>
</div>

    )
}

export default Thankyou
