import React from "react"
// import ServiceItem from "../components/ServiceItem"
// import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faRocket, faMagic, faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div id = "services" className="container-fluid" style={{ backgroundColor: "#9ed194" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Services We Offer </h1>
          <div className="row">
            <Fade bottom>
              <div className="col-lg-3 my-4 col-sm-12 text-center">
                <FontAwesomeIcon icon={faRocket} size="8x" />
                <h3 className="mt-5">Branding</h3>
                <p>
                  First impressions matter.  Let us help you breathe life into
                  your vision with our industry leading branding services.
                </p>
              </div>
              <div className="col-lg-3 my-4 col-sm-12 text-center">
                <FontAwesomeIcon icon={faMagic} size="8x" />
                <h3 className="mt-5">Design</h3>
                <p>
                  Mobile first designs focused on conversions.  We go much further than
                  just a logo.  Let us help get your ideas out into the world.
                </p>
              </div>
              <div className="col-lg-3 my-4 col-sm-12 text-center">
                <FontAwesomeIcon icon={faCode} size="8x" />
                <h3 className="mt-5">Development</h3>
                <p>
                  Specializing in creating MVP applications, our team of industry veterans has years of experience
                  launching new projects from square 0.
                </p>
              </div>
              <div className="col-lg-3 my-4 col-sm-12 text-center">
                <FontAwesomeIcon icon={faCommentsDollar} size="8x" />
                <h3 className="mt-5">Marketing</h3>
                <p>
                  Don't let your new project collect dust after launching.  We offer content, email,
                  social media, SEO and PPC services to find and convert your audience.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
