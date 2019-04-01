import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = props => {
  const getSkills = props.skillsData[0].keywords.map(function(item, index) {
    return (
      <li key={index} className="list-inline-item">
        <span className="label label-success chip">{item}</span>
      </li>
    );
  });

  return (
    <section className="skills">
      <h2 className="text-uppercase">
        <FontAwesomeIcon icon="code" /> Skills
      </h2>
      <ul className="skills-list list-inline">{getSkills}</ul>
    </section>
  );
};

export default Skills;
