import React from 'react'
import {Link} from "react-router-dom";
function Home() {
    return (
       <div className="canvas">
  <header>   
    <img src="images/header.png" className="img-fluid" />     
  </header>
  <div className="main">
    <div className="banner bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="fst-normal">Getting started
              with your <span className="text-warning text-decoration-underline">DSMC3
                RED Touch 7.0”</span></h1>
          </div>
        </div>
        <div className="d-md-flex justify-content-between align-items-center pt-5">
          <p className="lead mb-0-md">Want to register your device? {/*<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-html="true" 
            data-bs-content="SmallHD product registration is quick, 
            easy and secure. Your registration will allow us to serve you better over the lifetime of your device and we'll keep you up to date on the latest news and information about SmallHD Products.">*/}
            <a className="btn btn-sm btn-warning rounded-circle p-0 pop-up-link align-items-center">?</a>
            {/*</span>*/}</p>
          <Link to="/registration">
          <a  className="btn btn-warning btn-lg">Register Device</a>
          </Link>
        </div>
      </div>
    </div>
    <div className="content py-5">
      <div className="container">
        <section className="mb-5">
          <h2 className="border-bottom pb-4 mb-2">
            Quick Start Guide
          </h2>
          <div className="mb-5 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="icon"><img src="images/pdf-icon.png" className="me-2" alt="Pdf Icon" /></span> 
              <p className="lead m-0 mt-2"><span>DSMC3 RED Touch 7.0” QSG</span></p>
            </div>
            <a href="#" className="btn icon text-warning"><i className="fal fa-arrow-to-bottom fs-1" /></a>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="border-bottom pb-4 mb-2">
            Firmware
          </h2>
          <div className="mb-5">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <span className="icon align-self-start pt-md-3  pt-4"><img src="images/update-icon.png" className="me-2 mt-2" alt="Pdf Icon" /></span> 
                <p className="lead m-0 ms-2">
                  <small className="d-block fs-6 mb-05">2021-12-07</small>
                  DSMC3™ RED® Touch 7.0" LCD Firmware <span className="text-warning ms-2">v4.8.0</span>
                  {/*<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-html="true" 
              data-bs-content="<b>Important Beta Software Info:</b> <br> There may be some unknown bugs with v4.7.5 Beta. Please report bugs to support@smallhd.com">*/}
                  <a className="btn btn-sm btn-warning rounded-circle p-0 pop-up-link align-items-center">?</a>
                  {/*</span>*/}
                </p>
              </div>
              <a href="https://downloads.smallhd.com/dev/backend-node-server/firmware/redtouch/SmallHD_RED_Touch_Firmware_V4.8.0.zip" className=" btn icon text-warning"><i className="fal fa-arrow-to-bottom fs-1" /></a>
            </div>
            <div className="mb-2 ps-lg-5 ps-sm-4">
              <p className="m-0 text-dark">Firmware update Best practices:</p>
              <ul>
                <li>SD card 2,4,8,16GB</li>
                <li> Backup your profile before update (recommended)</li>
                <li>Use AC power or fully charged battery</li>
                <li>Note older version of firmware before update</li>
              </ul>
            </div>
            <div className="mb-2 ps-lg-5  ps-sm-4">
              <p className="m-0 text-dark">Firmware Compatibility:</p>
              <ul>
                <li>This firmware is compatible with the DSMC3 RED® Touch 7.0" LCD</li>
                <li>This firmware is <b>not compatible with</b> other SmallHD or RED® Touch monitors</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="pb-4 mb-2">
            Additional Resources
          </h2>
          <a href="#" className="text-decoration-none text-secondary">
            <hr />
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon"><img src="images/document-icon.png" className="me-2" alt="Pdf Icon" /></span> 
                <p className="lead m-0 mt-2 ">User Guide</p>
              </div>
              <span className="btn icon"><img src="images/externallink-icon.png" /></span>
            </div>
            <hr />
          </a>
          <a href="#" className="text-decoration-none text-secondary"><div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="icon"><img src="images/chat-icon.png" className="me-2" alt="Pdf Icon" /></span> 
                <p className="lead m-0">Contact Us</p>                  
              </div>
              <span className="btn icon"><img src="images/externallink-icon.png" /></span>
            </div></a>
        </section>
      </div>
    </div>
  </div>
  <footer>   
    <img src="images/footer.png" className="img-fluid" />    
  </footer>
</div>
    )
}

export default Home
