import React from "react";
import ProjectList from "./ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = props => {
  const getWorkExperience = () => {
    const workItems = [];
    props.workData.forEach((val, index) => {
      workItems.push(<ProjectList key={index} workItemData={val} />);
    });
    return workItems;
  };

  return (
    <section className="work">
      <h2 className="text-uppercase">
        <FontAwesomeIcon icon="briefcase" /> Work experience
      </h2>
      {getWorkExperience()}
    </section>
  );
};

export default Project;
