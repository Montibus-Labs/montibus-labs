import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faRocket, faMagic, faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            faIcon
          }
        }
      }
    }
  `)
  return (
    <div id = "services" className="container-fluid" style={{ backgroundColor: "#9ed194" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Services We Offer </h1>
          <div className="row">
            <Fade bottom>
              <div className="col-lg-3 my-4 col-sm-12">
                <FontAwesomeIcon icon={faRocket} size="8x" />
                <h3 className="mt-5">Branding</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
                  harum eum odit tempore quos dolor nesciunt rerum est totam alias.
                </p>
              </div>
              <div className="col-lg-3 my-4 col-sm-12">
                <FontAwesomeIcon icon={faMagic} size="8x" />
                <h3 className="mt-5">Design</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
                  harum eum odit tempore quos dolor nesciunt rerum est totam alias.
                </p>
              </div>
              <div className="col-lg-3 my-4 col-sm-12">
                <FontAwesomeIcon icon={faCode} size="8x" />
                <h3 className="mt-5">Development</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
                  harum eum odit tempore quos dolor nesciunt rerum est totam alias.
                </p>
              </div>
              <div className="col-lg-3 my-4 col-sm-12">
                <FontAwesomeIcon icon={faCommentsDollar} size="8x" />
                <h3 className="mt-5">Marketing</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
                  harum eum odit tempore quos dolor nesciunt rerum est totam alias.
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
