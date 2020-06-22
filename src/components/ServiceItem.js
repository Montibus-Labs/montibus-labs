import React from "react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faRocket, faMagic, faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

function ServiceItem({ src, title, icon}) {
  return (
    <Fade bottom>
      <div className="col-lg-3 my-4 col-sm-12">
        <FontAwesomeIcon icon={faMagic} size="9x" />
        <h3 className="mt-5">{title}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          harum eum odit tempore quos dolor nesciunt rerum est totam alias.
        </p>
      </div>
    </Fade>
  )
}

export default ServiceItem
