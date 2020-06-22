import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#4EB855", color: "black" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 id="contact" className="text-center my-5">Stay in touch</h1>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Your Email"
                    name="email"
                  />
                </div>
              </div>
              <textarea rows = "2"
                name="message"
                className="inputBox mb-4"
                placeholder="Your Message" />
              <button className="btn btn-light mb-4 py-3 submitButton" type="submit" >
                Submit
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  )
}
