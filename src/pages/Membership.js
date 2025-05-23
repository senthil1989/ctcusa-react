import React, { useState } from "react";

function Membership() {
  const [membershipType, setMembershipType] = useState(""); // State to track selected membership type
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobilePhone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    adults: "",
    familyMembers: "",
    city: "",
    state: "",
    zip: "",
    message: "",
  }
  ); // State to track form data
  const [status, setStatus] = useState("");
  const scriptURL = "";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      let data ={...formData,membershipType,membershipAmount:"100$"}
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data), // Include membership type and amount in the request body
        mode: 'no-cors',  
        headers: { "Content-Type": "application/json" }
      });
console.log("Response:", response);
      const result = await response.text();
      setStatus("Form submitted successfully!");
      // setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Submission failed. Try again.");
    }
  };

  const handleMembershipChange = (event) => {
    setMembershipType(event.target.value); // Update state when membership type changes
  };
  return (
    <section id="donate_dt" className="p_4 pb-0 w-75 mx-auto">
      <div className="container-xl">
        <div className="col-md-12">
          <div className="row about_h2 mt-5">
            <h1 className="mt-3 font_50">Membership</h1>
            <p className="mt-3 p-3">Dear Members of the Telugu Community,</p>
          </div>
        </div>
        <div className="donate_dt1 row">
          <div className="col-md-8">
            <div className="donate_dt1l  p-4 border_1">
              <form
                className="donate_dt1l2 mt-3"
                onSubmit={handleSubmit}
                name="membershipForm"             >                
                <h5 className="mt-4">Membership Details</h5>
                <div className="donate_dt1l2i row mt-3">
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="membershipType">Membership Type</label>
                      <select
                        className="form-select"
                        id="membershipType"
                        name="membershipType"
                        required
                        onChange={handleMembershipChange}
                        value={membershipType}
                      >
                        <option value="" disabled selected>
                          Select your membership type
                        </option>
                        <option value="basic">
                          CTCUS lifetime membership fee for Single/Family
                        </option>
                      </select>
                    </div>
                  </div>
                  {membershipType && (
                    <div className="col-md-6">
                      <div className="donate_dt1l2i1l">
                        <label htmlFor="membershipAmount">Amount</label>
                        <input
                          className="form-control  border-0 bg_light font_14"
                          placeholder="100$"
                          type="text"
                          name="membershipAmount"
                          id="membershipAmount"
                          value={"100$"}
                          disabled
                        />
                      </div>
                    </div>
                  )}
                </div>
                <h5 className="mt-4">Personal Info</h5>
                <div className="donate_dt1l2i1 row mt-3">
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your first name"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your last name"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="donate_dt1l2i1 row mt-3">
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="mobilePhone">Mobile *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your mobile number"
                        type="tel"
                        name="mobilePhone"
                        id="mobilePhone"
                        value={formData.mobilePhone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="email">Email *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your email address"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="donate_dt1l2i1 row mt-3">
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="addressLine1">Address Line 1 *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your address line 1"
                        type="text"
                        name="addressLine1"
                        id="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="addressLine2">Address Line 2</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your address line 2"
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                        id="addressLine2"
                      />
                    </div>
                  </div>
                </div>
                <div className="donate_dt1l2i1 row mt-3">
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="familyMembers">Number of Family Members</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your first name"
                        type="number"
                        name="familyMembers"
                        id="familyMembers"
                        value={formData.familyMembers}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="adults">Number of Adults</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter your last name"
                        type="number"
                        name="adults"
                        id="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                </div>
                <div className="donate_dt1l2i1 row mt-3">
                  <div className="col-md-4">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="city">City *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter the city"
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="state">State *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter the state"
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="zip">Zip *</label>
                      <input
                        className="form-control  border-0 bg_light font_14"
                        placeholder="Enter the zip code"
                        type="text"
                        name="zip"
                        id="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* <h5 className="mt-4">Spouse Details (Optional)</h5>
  <div className="donate_dt1l2i1 row mt-3">
    <div className="col-md-6">
      <div className="donate_dt1l2i1l">
        <label htmlFor="spouseFirstName">First Name</label>
        <input
          className="form-control  border-0 bg_light font_14"
          placeholder="Enter your spouse first name"
          type="text"
          name="spouseFirstName"
          id="spouseFirstName"
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="donate_dt1l2i1l">
        <label htmlFor="spouseLastName">Last Name</label>
        <input
          className="form-control  border-0 bg_light font_14"
          placeholder="Enter your spouse last name"
          type="text"
          name="spouseLastName"
          id="spouseLastName"
        />
      </div>
    </div>
  </div>
  <div className="donate_dt1l2i1 row mt-3">
    <div className="col-md-6">
      <div className="donate_dt1l2i1l">
        <label htmlFor="spousePhone">Phone</label>
        <input
          className="form-control  border-0 bg_light font_14"
          placeholder="Enter your spouse phone number"
          type="tel"
          name="spousePhone"
          id="spousePhone"
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="donate_dt1l2i1l">
        <label htmlFor="spouseEmail">Email</label>
        <input
          className="form-control  border-0 bg_light font_14"
          placeholder="Enter your spouse email address"
          type="email"
          name="spouseEmail"
          id="spouseEmail"
        />
      </div>
    </div>
  </div>
  <div className="donate_dt1l2i1 row mt-3">
    <div className="col-md-12">
      <div className="donate_dt1l2i1l">
        <label htmlFor="numberOfChildren">No. of Children</label>
        <input
          className="form-control  border-0 bg_light font_14"
          placeholder="No. of Children"
          type="number"
          name="numberOfChildren"
          id="numberOfChildren"
        />
      </div>
    </div>
  </div> */}
                <div className="donate_dt1l2i1 row mt-3">
                  <div className="col-md-12">
                    <div className="donate_dt1l2i1l">
                      <label htmlFor="message">Write a Message</label>
                      <textarea
                        placeholder="Write a Message"
                        className="form-control  border-0 bg_light font_14 form_text"
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                      ></textarea>
                      <div className="col-md-12 member-term">
                        <div className="term-member">Terms and Condition</div>
                        <div class="form-check mt-3 font_14">
                          {/* <input class="form-check-input" type="checkbox" value=""/>
      <label class="form-check-label" for="flexCheckDefault">
      Save my name, email, and website in this browser for the next time I comment.
      </label> */}
                          <ul class="mb-0 font_15">
                            <li class="mt-2 d-flex">
                              <i class="fa fa-circle font_8 me-1"></i>
                              <span>
                                By submitting this form, I confirm that I am
                                over 18 years old and agree to the Terms &amp;
                                Conditions of CTCUS.
                              </span>
                            </li>
                            <li class="mt-2 d-flex">
                              <i class="fa fa-circle font_8 me-1"></i>
                              <span>
                                Please be aware that the CTCUS Membership fee is
                                non-refundable and non-negotiable. As a
                                membership-based organization that does not sell
                                physical products, all membership purchases are
                                final. Once a membership is purchased, neither
                                CTCUS nor our payment processing systems can
                                issue a refund. Therefore, please ensure you
                                make your purchase decision carefully.
                              </span>
                            </li>
                            <li class="mt-2 d-flex">
                              <i class="fa fa-circle font_8 me-1"></i>
                              <span>
                                By submitting this form, you acknowledge and
                                consent to the Bylaws of the CTCUS organization.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h6 className="mb-0 mt-4 center_sm">
                        <button type="submit"  id="submit" className="button">
                          Submit
                        </button>
                      </h6>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-md-4">
		   <div className="donate_dt1r">
		     <div className="donate_dt1r1 p-3  border_1">
			   <div className="donate_dt1r1i position-relative">
			     <div className="donate_dt1r1i1">
			        <div className="grid clearfix">
			<figure className="effect-jazz mb-0">
			<a href="#"><img src="img/6.jpg" className="w-100" alt="img25"/></a>
			</figure>
			</div>
			 </div>
			    <div className="donate_dt1r1i2 position-absolute">
			      <span className="d-inline-block text-white bg_oran font_12 p-2 px-3">EDUCATION</span>
			 </div>
			 </div>
			 <div className="donate_dt1r1io px-2 pt-3">
			   <h5><a href="#">Educate children to get good life</a></h5>
			   <p className="mb-0 mt-3">There are many variations of passages of Lorem Ipsum available</p>
			 </div>
			 </div>
			  <div className="donate_dt1r2 p-3 bg_light border_1">
			    <h6 className="text-center">46%</h6>
				<div className="progress-bar mt-3">
			<div className="progress" >
			</div>
		</div><h6 className="mb-0 mt-3">Raised: <span className="fw-bold">$1410</span> <span className="float-end">Goal: <span className="fw-bold">$2000</span></span></h6>
			  </div>
			  <div className="donate_dt1r3 mt-4 ">
			   <h5 className="p-3 mb-0  text-white bg_oran">Organizer :</h5>
			   <div className="bg_light donate_dt1r3i row mx-0 pt-4 pb-4">
			     <div className="col-md-3">
				   <div className="donate_dt1r3il">
				     <img src="img/25.jpg" className="rounded-circle w-100" alt="abc"/>
				   </div>
				 </div>
				 <div className="col-md-9">
				   <div className="donate_dt1r3ir">
				     <h5 className="fw-bold fs-6 mb-3">Lorem Amet</h5>
					 <h6 className="font_14"><a href="#"><i className="fa fa-tag col_oran me-1 align-middle"></i> Medical</a></h6>
					  <h6 className="font_14 mb-0"><a href="#"><i className="fa fa-tag col_oran me-1 align-middle"></i> New York, Usa</a></h6>
				   </div>
				 </div>
			   </div>
			  </div>
		   </div>
		 </div> */}
        </div>
      </div>
    </section>
  );
}

export default Membership;
