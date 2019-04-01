import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = props => {
  return (
    <section className="about">
      <h2 className="text-uppercase">
        <FontAwesomeIcon icon="user" /> About
      </h2>
      <div>{props.aboutData}</div>
    </section>
  );
};

export default About;
