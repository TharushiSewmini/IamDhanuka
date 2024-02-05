import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main-container">
      <div className="container-contact">
        <div className="left-container">
          <div className="contact-forum">
            <h4 className="contact-titile">
              Please fill your contact details{" "}
            </h4>
            <input
              type="text"
              placeholder="Your Name"
              className="input-contact"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input-contact"
            />
            <input
              type="number"
              placeholder="Your Contact number"
              className="input-contact"
            />
            <input
              type="text"
              placeholder="Your Company Name"
              className="input-contact"
            />
          </div>

          <div className="add-tic">
            <h4 className="contact-titile">
              {" "}
              Our Services you are interested in
            </h4>

            <div className="check-container">
              <div className="contact-check">
                <input type="checkbox" className="contact-checkbox" />
                <label className="contact-alignment"> All </label>
              </div>

              <div className="contact-check">
                <input type="checkbox" className="contact-checkbox" />
                <label className="contact-alignment"> Job Portal</label>
              </div>

              <div className="contact-check">
                <input type="checkbox" className="contact-checkbox" />
                <label className="contact-alignment"> News</label>
              </div>

              <div className="contact-check">
                <input type="checkbox" className="contact-checkbox" />
                <label className="contact-alignment">
                  {" "}
                  Electrical Engineering objectives
                </label>
              </div>
              <div className="contact-check-last">
                <input type="checkbox" className="contact-checkbox" />
                <label className="contact-alignment"> Others</label>

                <div className="sub-check">
                  <div className="check-others">
                    <div className="contact-check">
                      <input type="checkbox" className="contact-checkbox" />
                      <label className="contact-alignment">A</label>
                    </div>

                    <div className="contact-check">
                      <input type="checkbox" className="contact-checkbox" />
                      <label className="contact-alignment">B</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-contact"> SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
