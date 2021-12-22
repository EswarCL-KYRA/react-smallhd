import React from 'react'
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
function Reg() {
  let [file,setFile]=useState(``);
  let [message,setMessage]=useState("");
  let fileupload=({target:{files}})=>{
    setFile(files[0])
  }
  let handleform=(e)=>{
    setMessage("");
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let company=document.getElementById("company").value;
    let phone=document.getElementById("phone").value;
    let country=document.getElementById("country").value;
    let state=document.getElementById("state").value;
    let city=document.getElementById("city").value;
    let serial=document.getElementById("serial").value;
    // let purchase=document.getElementById("purchase").value;
    let upload=file;
    console.log(upload);

    const formdata=new FormData();
    try{
     formdata.append("isRedTouch",1)
     formdata.append("company_id",1)
      formdata.append("name",fname+" "+lname);
      formdata.append("email",email);
      formdata.append("company",company);
      formdata.append("phone",phone);
      formdata.append("country",country);
      formdata.append("state",state);
      formdata.append("city",city);
      formdata.append("deviceId",serial);
      formdata.append("proof",file);
      console.log("<<<<<",lname,fname,email,company,phone,country,city,state,file,serial,">>>>>");
    }
    catch(err){
      console.log("error in the form submission");
    }
    axios.put("https://fdw.smallhd.com:4001/warranty",formdata,{"Content-Type":"multipart/form-data"})
    .then((response)=>
      response.data
    ).then((info)=>{
      if(info.status=="success"){
      window.location.replace("/thankyou")
      }else{
        setMessage(info.message)
      }
      console.log(info)
      
    }).catch((err)=>{
     console.log(err);
    })
    

  }
    return (
<div className="canvas">
  <header>   
    <img src="images/header.png" className="img-fluid" />    
  </header>
  <div className="main">
    <div className="banner bg-light pt-5">
      <div className="container mb-5">
      <Link to="/">
      <a  className="text-warning btn px-0 mb-2"><i className="far fa-angle-left me-2" /> Back to Getting Started</a>
        </Link>
        <div className="row">
          <div className="col-md-6">
            <h2 className="fst-normal">SmallHD<br />
              Product<br className="d-sm-block d-none" /> Registration</h2>
          </div>
          <div className="col-md-6">
            <h4>SmallHD product registration is quick, easy and secure. Your warranty is not affected by your decision to register or not, but your registration will allow us to serve you better over the lifetime of your device.</h4>
            <h4 className="mt-4 d-block d-md-none">By registering your qualifying product<sup className="text-dark">1</sup>  you have access to premium tech support.</h4>
          </div>
        </div> 
      </div>
    </div>
    <div className="content py-5">
      <div className="container">
        <section className="mb-5">





          <form onSubmit={e=>{e.preventDefault();handleform(e)}}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fName" className="form-label">FIRST NAME <span className="text-warning fs-5">*</span></label>
                  <input type="text" className="form-control py-4" id="fname" placeholder="Your first name" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lName" className="form-label">LAST NAME <span className="text-warning fs-5">*</span></label>
                  <input type="text" className="form-control py-4" id="lname" placeholder="Your last name" required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">EMAIL ADDRESS <span className="text-warning fs-5">*</span></label>
                  <input type="email" className="form-control py-4" id="email" placeholder="Your email address" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">COMPANY</label>
                  <input type="text" className="form-control py-4" id="company" placeholder="Your company" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">PHONE NUMBER <span className="text-warning fs-5">*</span></label>
                  <input type="tel" className="form-control py-4" id="phone" placeholder="Your phone number" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">COUNTRY <span className="text-warning fs-5">*</span></label>
                  <select id="country" name="country" className="form-select py-4" required>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antigua & Barbuda">Antigua &amp; Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire">Bonaire</option>
                    <option value="Bosnia & Herzegovina">Bosnia &amp; Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Canary Islands">Canary Islands</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Channel Islands">Channel Islands</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Island">Cocos Island</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote DIvoire">Cote DIvoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curaco">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Ter">French Southern Ter</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Great Britain">Great Britain</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="India">India</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea North">Korea North</option>
                    <option value="Korea Sout">Korea South</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Midway Islands">Midway Islands</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Nambia">Nambia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherland Antilles">Netherland Antilles</option>
                    <option value="Netherlands">Netherlands (Holland, Europe)</option>
                    <option value="Nevis">Nevis</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau Island">Palau Island</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Phillipines">Philippines</option>
                    <option value="Pitcairn Island">Pitcairn Island</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Republic of Montenegro">Republic of Montenegro</option>
                    <option value="Republic of Serbia">Republic of Serbia</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="St Barthelemy">St Barthelemy</option>
                    <option value="St Eustatius">St Eustatius</option>
                    <option value="St Helena">St Helena</option>
                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                    <option value="St Lucia">St Lucia</option>
                    <option value="St Maarten">St Maarten</option>
                    <option value="St Pierre & Miquelon">St Pierre &amp; Miquelon</option>
                    <option value="St Vincent & Grenadines">St Vincent &amp; Grenadines</option>
                    <option value="Saipan">Saipan</option>
                    <option value="Samoa">Samoa</option>
                    <option value="Samoa American">Samoa American</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome & Principe">Sao Tome &amp; Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Tahiti">Tahiti</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad & Tobago">Trinidad &amp; Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks & Caicos Is">Turks &amp; Caicos Is</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Erimates">United Arab Emirates</option>
                    <option value="United States of America">United States of America</option>
                    <option value="Uraguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City State">Vatican City State</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                    <option value="Wake Island">Wake Island</option>
                    <option value="Wallis & Futana Is">Wallis &amp; Futana Is</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zaire">Zaire</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">STATE <span className="text-warning fs-5">*</span></label>
                  <input type="text" className="form-control py-4" id="state" placeholder="Your state" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">CITY</label>
                  <input type="text" className="form-control py-4" id="city" placeholder="Your city" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <h6 className="fw-bold d-block d-md-none">SERIAL NUMBER OF YOUR SMALLHD PRODUCT(S)</h6>
                  <p className="d-block d-md-none">Most serial numbers are 8-10 digits long and do not include the revision letter. Enter each serial number separately.</p>
                  <label htmlFor="serial" className="form-label">SERIAL NUMBER <span className="text-warning fs-5">*</span> &nbsp; 
                    {/*<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-html="true" 
                      data-bs-content="...">*/}
                    <a className="btn btn-sm btn-warning rounded-circle p-0 pop-up-link align-items-center">?</a>
                    {/*</span>-*/}
                  </label>
                  <input type="text" className="form-control py-4" id="serial" placeholder="Monitor serial number" required />
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="purchase" className="form-label">PURCHASE LOCATION</label>
                  <input type="text" className="form-control py-4" id="purchase" placeholder="Purchase location" />
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="upload" className="form-label">UPLOAD RECEIPT &nbsp; {/*<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-html="true" 
                    data-bs-content="Receipt uploading is optional, however this can help expedite the support process if needed in the future.">*/}
                  <a className="btn btn-sm btn-warning rounded-circle p-0 pop-up-link align-items-center">?</a>
                  {/*</span>*/}
                </label>
                <div className="mb-3 position-relative">
                  <input type="file" className="form-control py-4  hide-input" id="upload" onChange={fileupload} placeholder="Upload receipt" />
                  <div className="file-upload form-control py-4 d-flex justify-content-end align-items-center"> <span id="file-name" className="me-auto" /> <span><img src="images/upload-arrow.png" /></span></div>
                </div>
              </div>
            </div>
            <hr className="mb-5" />
            <h3 style={{color:"red"}}>{message}</h3>
            <div className="row align-items-center mb-5">
              <div className="col-md-8">
                <div className="form-check ms-sm-5 ms-3">
                  <input type="checkbox" className="form-check-input fs-1 mt-0" id="exampleCheck1" />
                  <label className="form-check-label fs-5" htmlFor="exampleCheck1">I want to be notified via email about firmware updates, <br className="d-none d-lg-block" /> newsletters, events, new products, promotions, etc.</label>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-3 text-end">
                <button type="submit" className="btn btn-lg btn-warning w-100">Submit</button>
              </div>
            </div>
            <p>SmallHD will use the information you provide on this form to be in touch with you and to provide updates and marketing content via email.<br /> 
              Having trouble? <a href="#" className="text-warning text-decoration-none">Let us know.</a>
            </p>
            <p>I do not want to register. <a href="#" className="text-warning text-decoration-none">Download firmware now.</a></p>
            {/*<p>
                Teradek will use the information you provide on this form to be in touch with you and to provide updates and marketing content via email.</p>

               <p> You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us at <a href="#">marketing@teradek.com.</a> We will treat your information with respect. For more information about our privacy practices please <span class="text-dark">view our privacy policy.</span></p>
                By clicking the button below, you agree that we may process your information in accordance with these terms</p>
                
                <p>We use MailChimp as our marketing automation platform. By clicking below to submit this form, you acknowledge that the information you provide will be transferred to MailChimp for processing in accordance with their Privacy Policy and Terms.</p>
                
                Having trouble? Let us know.
              </p>*/}
          </form>














        </section>
        <section className="mb-5 pt-5">
          <div className="accordion mb-4" id="accordionExample">
            <div className="accordion-item border-end-0 border-start-0">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button fs-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Warranty Information
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <h3 className="text-dark fw-bold mb-3 fs-1">Standard Limited Warranty and Exclusions</h3>
                  <p className="text-dark fs-5 mb-3"> SMALLHD warrants to the original owner-user that this SMALLHD product 
                    will be free from defects in material or workmanship. This warranty is limited to twelve (12) months from the original purchase date, 
                    whether or not actual use begins on that date.
                  </p>
                  <h3 className="text-dark mb-3">Limitations and Exclusions</h3>
                  <p className="text-dark fs-5 mb-2">
                    SMALLHD’s obligations under this warranty and the sole remedy for its breach are limited to repair, of any part or parts of its products which prove to be defective; or, in its sole discretion, replacement of such products. All returns of defective parts or products must include the product model number and serial number, and must be made through an authorized Customer Service Center. Authorized returns must be shipped prepaid. 
                    The warranty provided herein does not cover charges for labor or other costs incurred in the troubleshooting, repair, removal, installation, service or handling of parts or complete products.
                  </p>
                  <ol type={1.}>
                    <li className="mb-2 text-dark fs-5">
                      All claims under the warranty provided herein must be made within thirty (30) days from the date of discovery of the defect. Failure to notify SMALLHD of a warranted defect within thirty (30) days of its discovery voids SMALLHD’s obligations hereunder.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      The warranty provided herein shall be void and of no effect in the event that (a) the product has been operated outside its intended application; (b) the product has been subjected to user damage, misuse, neglect, accident, improper or inadequate maintenance, corrosive environments, environments containing airborne contaminants (silicone, aluminum oxide, etc.), or excessive thermal shock; (c) unauthorized modifications are made to the product; (d) the product is not installed or operated in compliance with the manufacturer’s printed instructions; (e) the product is not installed and operated in compliance with applicable building, mechanical, plumbing and electrical codes; (f) the serial number of the product has been altered, defaced or removed; (g) the product panel has equal to 3 or less dead pixels
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      You acknowledge that the Product is not fault tolerant and is not designed, manufactured, or intended for use or resale as control equipment in hazardous or high risk environments and activities requiring fail-safe performance (such as in the operation of nuclear facilities, aircraft navigation or communication systems, air traffic control, direct life support machines, or weapons systems) in which the failure of the Product could lead directly to death, personal injury, or severe physical or environmental damage. You agree not to use or allow the use of the Product or any portion thereof for, or in connection with, any such environment or activity.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      The warranty provided herein is for repair or replacement only. SMALLHD shall not be liable for any loss, cost, damage, or expense of any kind arising out of a breach of the warranty or of the sale. Further, SMALLHD shall not be liable for any incidental, consequential, exemplary, special, or punitive damages, nor for any loss of revenue, profit or use, arising out of a breach of this warranty or in connection with the sale, delivery, maintenance, use, operation or repair of any SMALLHD product. In no event will SMALLHD be liable for any amount greater than the purchase price of a defective product. The disclaimers of liability included in this Paragraph shall remain in effect and shall continue to be enforceable in the event that any remedy herein shall fail of its essential purpose. Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      This warranty is the sole and exclusive warranty for SMALLHD’s products, and is in lieu of all other express and implied warranties. SMALLHD specifically disclaims all other express and implied warranties, including, but not limited to, all implied warranties of merchantability and fitness for a particular purpose. No person or entity is authorized to bind SMALLHD’s to any other warranty, obligation or liability for any SMALLHD product. Installation, operation or use of the SMALLHD product for which this warranty is issued shall constitute acceptance of the terms hereof.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      There are no warranties of merchantability and no warranties which extend beyond the description on the face of this agreement.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      Goods defined as B-Stock are sold with a 90 day limited hardware warranty and are eligible for Refund for 14 days after purchase. Said goods will be sold as is with all accessories as advertised on its sale page. Goods have all regular functionality, may show signs of use, and may have cosmetic defects including but not limited to: scratches, dead pixels, off-color or dim backlight panels.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      Goods defined as C-Stock are sold with no hardware warranty and are eligible within 15 business days of purchase for Refund. Any repair costs will be the customer’s responsibility. Goods have all original functionality and have been previously used, may have cosmetic defects including panel scratches, dead pixels, be off-color and/or a dimmer backlight. Goods will be shipped with accessories as advertised.
                    </li>
                    <li className="mb-2 text-dark fs-5">
                      Goods defined as EOL (End of Life) have a limited hardware warranty which is dependent on repair parts availability.
                    </li>
                  </ol>
                  <hr className="w-75 mb-4" />
                  <h3 className="fs-1 text-dark fw-bold mb-3">Repair Of Defective Products</h3>
                  <p className="text-dark fs-5 mb-4">
                    Warranty repair services shall be provided at any of SMALLHD’s authorised repair facilities. SMALLHD shall within two weeks of receipt of returned products provide a report to the original owner/user (“USER”) detailing those products accepted under warranty and any that are not accepted under warranty due to physical damage or improper use. SMALLHD will use its best efforts to repair defective products as quickly as possible with “turnaround time” (time for repair after receipt of units) to be six (6) weeks or less from receipt at the SMALLHD facility. Shipment of the repaired or replaced warranted products to USERʼs location shall be at the expense of SMALLHD. Shipment of the repaired or replaced non-warranted products to USERʼs location shall be at the expense of USER.  For non-warranted repairs, SMALLHD shall report to USER an estimated time to repair failed units, and shall not proceed with repairs until such time that USER has provided approval for said repairs. For problems due to incorrect use of the Product, or factors external to the Product, or repairs for unwarranted units, SMALLHD shall repair at a separate cost borne be USER, at a billing rate of $100 per hour. SMALLHD shall repair or exchange, and ship to USER, the returned Product within six (6) weeks of receipt of Product by SMALLHD.
                  </p>
                  <p className="mb-2 text-dark">“B-Stock” means used Goods which may be factory refurbished items</p>
                  <p className="text-dark">“EOL” means End of Life Goods which are discontinued; parts are no longer produced or in limited availability</p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button fs-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Privacy Policy
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p className="text-dark fs-5 ">
                    As part of The Vitec Group plc, SmallHD observes all applicant statutory data protection requirements and is aware of the fact that particularly sensitive handling of all personal data sent to the Vitec Group plc or any of its subsidiaries by the users is highly important to them. With this privacy policy, SmallHD, as part of the Vitec Group plc, would like to inform you about how we process your personal data.
                  </p>
                  <h2 className="text-dark fw-bold fs-3">
                    Data Controller: Who we are
                  </h2>
                  <p className="text-dark fs-5 mb-2">As a subsidiary of The Vitec Group plc, we sell our products and provide services to our customers throughout the world. SmallHD LLC is the data controller for your information.</p>
                  <h2 className="text-dark fw-bold fs-3">
                    Personal Data We Collect And How We May Use It 
                  </h2>
                  <ul>
                    <li className="text-dark fs-5 mb-2">
                      Among other things, personal data is understood to mean information such as your name, address, e-mail address, and any other information that may identify you. We collect personal data only if, only to the extent that, and only for the purposes for which you provide us with this data of your own accord, for example, within the framework of a registration or sale. More specifically, we use your personal data for advertising purposes only if you have expressly given us your consent to do so. Your personal data will not be sold to third parties without your express consent. Only within the framework of applicable legislation, or if we are obligated to do so by a court decision, shall personal data be transmitted to government institutions and authorities entitled to receive information.
                    </li>
                    <li className="text-dark fs-5">
                      Insofar as we commission third parties to fulfill individual tasks and services for us, their access to your personal data is limited to the extent necessary for the fulfillment of their tasks. These service providers are obligated to process your personal data in accordance with this privacy policy and applicable data protection laws.
                    </li>
                  </ul>
                  <h2 className="fs-3 text-dark fw-bold">What information we collection</h2>
                  <h4 className="text-dark fw-bold">From our customers</h4>
                  <ul>
                    <li className="text-dark fs-5 mb-1">
                      We will collect personal information including name and contact details, such as address, email and phone number; also, with your explicit permission, certain pieces of sensitive information.
                    </li>
                    <li className="text-dark fs-5 mb-1">
                      We collect details of ethnicity for diversity and monitoring purposes.
                    </li>
                    <li className="text-dark fs-5 mb-3">
                      Financial information such as bank and direct debit requests together with subscription history will be maintained.
                    </li>
                  </ul>
                  <h4 className="text-dark fw-bold">Employees</h4>
                  <p className="text-dark fs-5 mb-3">We will collect all personal information required to comply with employment legislation, including, where necessary, sensitive information. This may include medical information and where additionally appropriate we will perform a criminal record search. To prevent discrimination, and ensure diversity, we shall request information from the Data Subject on religion, sexuality and ethnicity.</p>
                  <h4 className="text-dark fw-bold">CCTV</h4>
                  <p className="text-dark fs-5 mb-3">In order to prevent and detect crime, and to ensure the safety of our customers and staff, we operate CCTV systems at our various locations. These cameras record footage in real-time and are operated and controlled by our own staff; monitoring and recording does not take place in any changing room and toilet areas.</p>
                  <h4 className="text-dark fw-bold">Cookies</h4>
                  <p className="text-dark fs-5 mb-3">Anonymous user data is recorded when visiting our website, please see the section on cookies and Google Analytics below. No data is purchased or sold to any third parties.</p>
                  <h4 className="text-dark fw-bold">Children</h4>
                  <p className="text-dark fs-5 mb-1">We will not deliberately establish contact with children under 18 years of age, or 14 years of age in Korea, or collect their personal data. Our website is not directed at children and is not intended for collecting children's data. If you believe that we have mistakenly or inadvertently collected such information via our website, please contact us via the address provided below, so that we can immediately delete this data from our servers.</p>
                  <p className="text-dark fs-5 mb-3">Parents and guardians should be actively involved in their children's Internet and cell phone usage.</p>
                  <h2 className="text-dark fw-bold fs-3">Why we need your information</h2>
                  <p className="text-dark mb-3 fs-5">On SmallHD.com, personal data is collected in order to perform various transactions such as:</p>
                  <ul>
                    <li className="text-dark mb-2 fs-5">Product or service orders, activations, and registrations: we need your information to fulfill our obligations under purchase agreements or service orders. Personal and financial information is essential to manage ongoing subscriptions and payments.</li>
                    <li className="text-dark mb-2 fs-5">Creation of profiles and verification of users: we need your information to ensure you are the person creating a profile.</li>
                    <li className="text-dark mb-2 fs-5">Requests for information: we need your information to ensure you are the person requesting information from us.</li>
                    <li className="text-dark mb-2 fs-5">Marketing or support subscriptions: by understanding customers' interests and preferences we can provide our valued customers with targeted communications (direct mail) and concessions and other additional benefits. Personal and financial information is essential to manage ongoing subscriptions and payments.</li>
                    <li className="text-dark mb-2 fs-5">Participation in contests or surveys: we need your information to contact you if you win a prize or if we need to follow up on a survey.</li>
                    <li className="text-dark mb-2 fs-5">Human resources, payroll and finance: To comply with employment legislation and ensure that all staff working within the organization are qualified, competent, vetted and receive ongoing training.</li>
                  </ul>
                  <p className="text-dark mb-2 fs-5">The collection of personal data is carried out via Google Analytics which is an automated marketing tool that manages campaigns and analyzes client interests. Google complies with the requirements of the EU General Data Protection Regulations.</p>
                  <p className="text-dark mb-3 fs-5">For more information about this, go to <a href="#" className="text-warning text-decoration-none">https://privacy.google.com/businesses/compliance/</a></p>
                  <h2 className="text-dark fs-3 fw-bold">How we process your Information or share it</h2>
                  <p className="text-dark fs-5 mb-2">We will only use your personal information for the purpose for which it was given, we will not keep it for longer than is necessary and will destroy the information securely according to our formal retention policy.</p>
                  <p className="text-dark fs-5 mb-2">Unless a valid reason exists to retain longer, customer records are usually deleted 12 months after their subscription has expired. And all other records are retained for 7 years after the last official action. Job application files for unsuccessful applicants are destroyed after 12 months of the decision being made.</p>
                  <p className="text-dark fs-5 mb-2">In order to process orders, payments and financial transactions we use trusted and authorized secure third-party websites. Personal or sensitive information is not held or shared with third parties.</p>
                  <p className="text-dark fs-5 mb-2">We share information with our subsidiaries and affiliates to help us provide our services or conduct data processing on our behalf.</p>
                  <h2 className="text-dark fs-3 fw-bold">Where we store your information</h2>
                  <p className="text-dark fs-5 mb-2">
                    Your personal information will be hosted securely within the United States. We share information with our subsidiaries and affiliates to help us provide our services or conduct data processing on our behalf. For example, we may process or store information in the United Kingdom on behalf of our international subsidiaries and affiliates. If we transfer your information to a data processor, for example, an email broadcast company to assist us in keeping you up-to-date with announcements, news and information, and they are located outside of the United States, we shall take all reasonable steps to ensure that your information is protected as if we hosted it ourselves.
                  </p>
                  <h2 className="text-dark fw-bold fs-3">Marketing, Consents and Permissions</h2>
                  <p className="text-dark fs-5 mb-2">
                    Via e-mails, we inform you about our company, our services, and workshops. If you want to receive our e-mails we require you to provide a valid e-mail address as well as information allowing us to verify that you are the owner of the specified e-mail address, or that its holder agrees to receive the newsletter. Further data for email segmentation may also be collected. This data is only used to send the e-mails and will not be sold to third parties. Upon subscription to the e-mail, we store your IP address and the date of the subscription. This only serves as proof in case a third party abuses an e-mail address and subscribes without the knowledge of the entitled party. You have the right to withdraw, amend or change your consent for data storage and storage of the e-mail address as well as its use for sending the newsletter at any time. You may do this via a link at the end of each individual newsletter itself or by contacting us, using the contact details provided below.
                  </p>
                  <h2 className="text-dark fw-bold fs-3">Server Log Files</h2>
                  <p className="text-dark fs-5 mb-2">When you visit this website, the web server automatically records log files that cannot be attributed to any person in particular. This data includes, for instance, the browser type and version, the operating system used, the referrer URL (previously visited website), the IP address of the requesting computer, the access date and time of the server request, and the file request of the client (file name and URL). This data is only collected for the purpose of statistical analysis. The better we understand your wishes, the faster you can find the desired information on our webpages. The collected data is not passed on to third parties, neither for commercial nor non-commercial purposes.</p>
                  <h2 className="text-dark fw-bold fs-3">Integration of Social Network Plug-ins</h2>
                  <p className="text-dark fs-5 mb-2">On SmallHD.com social network plug-ins may be integrated on individual pages (e.g., Like button, Share button). Social networks include Facebook, YouTube, Instagram, or Twitter. When accessing a page on SmallHD.com containing such a plug-in, your browser establishes a connection to this social network. The content of the plug-in (the button) is then provided by the servers of this social network. In principle, these servers can thus track your visit to this page (in some cases including by means of cookies created during your visits to this social network).</p>
                  <p className="text-dark fs-5 mb-2">If you click on the plug-in and are simultaneously logged in to the social network, data might be sent to this social network by your browser, and the social network may associate it with your user account. To find out what data is sent in the process and how the social network handles it, please refer to the privacy notices of the respective social network. These will also offer information regarding different settings for protecting your privacy. If you are not logged in, you are usually given an opportunity to log in or register and create a user account.</p>
                  <p className="text-dark fs-5 mb-2">If you wish to prevent your social network from collecting data about you, you can log out before and delete any cookies of this provider. If you do not have an account with a social network, no data is transmitted.</p>
                  <h2 className="text-dark fs-3 fw-bold">Cookies and Website Tracking</h2>
                  <p className="text-dark fs-5 mb-2">Review our Cookie Policy here: <a href="#" className="text-decoration-none text-warning">https://smallhd.com/pages/cookie-policy</a></p>
                  <h2 className="text-dark fw-bold fs-3">Google Analytics</h2>
                  <p className="text-dark fs-5 mb-2">
                    This website uses Google Analytics, a web analytics service provided by Google Inc. ("Google"). Google Analytics uses what are called "cookies" - text files that are stored on your computer and enable an analysis of your use of the website. The information generated by the cookie regarding your use of this website is generally transmitted to and stored on a Google server in the U.S. However, if IP anonymization is activated on this website, your IP address is first abbreviated by Google within member states of the European Union or in other states party to the Agreement on the European Economic Area. Only in exceptional cases will the entire IP address be transmitted to and abbreviated on a Google server in the USA. Google will use this information on behalf of the operator of this website to analyze your use of the website, to compile reports about website activities and to provide further services related to the use of the website and the Internet to the website operator. The IP address transmitted by your browser in the context of Google Analytics is not associated with any other data held by Google. You can prevent cookie storage by selecting the appropriate settings in your browser software; however, please note that, in that case, you may not be able to use all features of this website to their full extent. Additionally, you can also prevent Google from collecting the data created by the cookie and related to your use of the website (including your IP address) as well as from processing this data by downloading and INSTALLING the browser plug-in available.
                  </p>
                  <p className="text-dark fs-5 mb-2">
                    You can find more information about this HERE or on this PAGE (general information about Google Analytics and privacy). Please note that, on this website, Google Analytics was extended by the code "gat._anonymizeIp();" to anonymize IP addresses, with the last octet being deleted.
                  </p>
                  <h2 className="text-dark fw-bold fs-3">Links to Third-Party Websites</h2>
                  <p className="text-dark fs-5 mb-2">
                    The website may link to other websites or resources over which the Vitec Group plc has no control ("external websites"). These links to external websites are not to be understood as an agreement, consent, or recommendation on the part of the Vitec Group plc. By accessing and/or using this website, you acknowledge that the Vitec Group plc merely provides these links and is not responsible for their content. The use of external websites is subject to the terms of use and privacy policies found under the link to the external websites. If you leave our website, we recommend you to be mindful of the fact that you are no longer on the webpages of the Vitec Group plc, and to read the privacy policies of these external websites before disclosing your personal information.
                  </p>
                  <h2 className="text-dark fw-bold fs-3">Global Customers - Your Rights Under GDPR</h2>
                  <p className="text-dark fs-5 mb-2">
                    The GDPR May 2018 provides individual rights to EU citizens which are listed below for your convenience. If you are an EU citizen:
                  </p>
                  <ul>
                    <li className="text-dark fs-5 mb-2">You have the right to be informed about how we ensure the 'fair processing of your information' and transparency of what we do as stated in this Privacy Policy.</li>
                    <li className="text-dark fs-5 mb-2">You have the right to access a copy of the personal information we hold about you by making a Subject Access Request (SAR) in writing or by email to SmallHD for attention of the Data Privacy Lead. Full contact details are provided at the end of this Privacy Policy.</li>
                    <li className="text-dark fs-5 mb-2">You have the right of rectification to amend or update your personal information and ensure we maintain accurate and up to date records and or data about you.</li>
                    <li className="text-dark fs-5 mb-2">You have the right to erasure, also known as 'the right to be forgotten'. The broad principle underpinning this right is to enable an individual to request the deletion or removal of personal data where there is no compelling reason for its continued processing by SmallHD.</li>
                    <li className="text-dark fs-5 mb-2">You have the right to 'block' or suppress the processing of your personal data. Processing of your personal information may be restricted in the event it is no longer essential to support the use of services provided to you and or not part of any contractual, legal or financial requirement to do so. SmallHD is permitted to store the personal data, but not further process it. SmallHD may retain just enough information about you to ensure that any restriction is respected in future.</li>
                    <li className="text-dark fs-5 mb-2">You have the right for data portability which allows individuals to obtain and or reuse their personal data for their own purposes across different services. It allows you to move, copy or transfer personal data easily from one IT environment to another in a safe and secure way, without hindrance to usability.</li>
                    <li className="text-dark fs-5 mb-2">You have the right to object to the processing of your personal information based on legitimate interests or the performance of a task in the public interest or exercise of official authority including profiling activity, direct marketing including profiling activity; and processing for purposes of scientific and or historical research and statistics.</li>
                    <li className="text-dark fs-5 mb-3">You have right to be made aware of any automated decision-making, that made without any human involvement, and or profiling of your personal information by SmallHD. For all Data Protection matters including Subject Access Requests please contact us via email at: privacy@smallhd.com ; by phone +1 (919) 439-2166 ; or in writing:
                      <br /> SmallHD <br /> 301 Gregson Drive <br /> Cary, NC 27511
                    </li>
                  </ul>
                  <h2 className="text-dark fs-3 fw-bold">California Privacy Rights</h2>
                  <p className="text-dark fs-5 mb-3">California residents can review SmallHD’s California Consumer Privacy Act disclosures here: <a href="#" className="text-decoration-none text-warning">https://teradek.com/pages/supplemental-california-consumer-privacy-act-privacy-policy</a></p>
                  <h2 className="text-dark fs-3 fw-bold">Complaints</h2>
                  <p className="text-dark fs-5 mb-3">If you are unhappy with how we have processed your personal information please firstly contact the Data Privacy Lead listed above (<a href="#" className="text-decoration-none text-warning">privacy@smallhd.com</a>) ; if you are still unhappy you may contact the following:</p>
                  <h5 className="fw-bold text-dark">UK Customers</h5>
                  <p className="text-dark fs-5 mb-3">Information Commissioner's Office <br />
                    Wycliffe House Water Lane Wilmslow Cheshire, SK9 5AF <br />
                    Helpline: 0303 123 1113 (local rate) or +44 1625 545 745</p>
                  <h5 className="text-dark fw-bold">EU customers</h5>
                  <p className="text-dark fs-5 mb-3">The European Data Protection Supervisor with online access to its web complaint form at:
                    <br /> <a href="#" className="text-decoration-none text-warning">https://edps.europa.eu/node/75</a></p>
                  <h2 className="text-dark fs-3 fw-bold">Changes to this Privacy Policy</h2>
                  <p className="text-dark fs-5 mb-4">Changes to this Privacy Policy
                    We reserve the right to change this privacy policy at any time in compliance with applicable data protection legislation. If we make significant changes, we will notify you of the changes through our websites or through others means, such as email. To the extent permitted under applicable law, by using our services after such notice, you consent to our updates to this policy. We encourage you to periodically review this policy for the latest information on our privacy practices. We will also make prior versions of our privacy policies available for review.</p>
                </div>
              </div>
            </div>
          </div>
          <h6 className="d-block d-md-none"><span className="text-dark">1</span> &nbsp;  Cables and accessories, for example,
            are not qualifying products.</h6>
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

export default Reg
