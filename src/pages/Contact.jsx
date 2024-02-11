import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Contact.css";
const Contact = () => {
  const [success, setsuccess] = useState("");
  const [show, setShow] = useState(false);
  const userEmail = useRef();
  const userName = useRef();
  const contact = useRef();
  const companyName = useRef();

  const sendData = async () => {
    try {
      const response = await axios.post(
        "http://192.168.154.250:4400/user/submitforum",
        {
          userEmail: userEmail.current.value,
          name: userName.current.value,
          contactnumber: contact.current.value,
          companyName: companyName.current.value,
        }
      );
  
      setsuccess(response.data);
      setShow(!show);
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error("Error:", error.response); // Log the error response for more details
    }
  };

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShow(false);
      },
      3000,
      [show]
    );

    return () => clearTimeout(timer);
  });

  return (
    <div className="main-container">
      <div className="container-contact">
        <div className="left-container">
          <div className="contact-forum">
            <h4 className="contact-titile">
              Please fill your contact details{" "}
            </h4>
            <input
              ref={userName}
              type="text"
              placeholder="Your Name"
              className="input-contact"
              value={userName.current?.value}
            />
            <input
              ref={userEmail}
              type="email"
              placeholder="Your Email"
              className="input-contact"
              value={userEmail.current?.value}
            />
            <input
              ref={contact}
              type="number"
              placeholder="Your Contact number"
              className="input-contact"
              value={contact.current?.value}
            />
            <input
              ref={companyName}
              type="text"
              placeholder="Your Company Name"
              className="input-contact"
              value={contact.current?.value}
            />
          </div>

          <div className="add-tic">
            <h4 className="contact-titile">
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
          <button className="btn-contact" onClick={sendData}>
            {" "}
            SUBMIT
          </button>

          <div
            className="hidden-text"
            style={{
              visibility: show ? "visible" : "hidden",
            }}
          >
            You a request sent succesfully
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
