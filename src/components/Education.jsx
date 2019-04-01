import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = props => {
  const getEducation = props.educationData.map(function(item, index) {
    const startdate = moment(item.startDate).format("MMM, YYYY");
    const enddate = moment(item.endDate).format("MMM, YYYY");
    return (
      <div key={index}>
        <h3>
          {item.studyType} in {item.area}
        </h3>
        <h4>{item.institution}</h4>
        <p>
          Studied: {startdate} - {enddate}
        </p>
      </div>
    );
  });

  return (
    <section className="education">
      <h2 className="text-uppercase">
        <FontAwesomeIcon icon="university" /> Education
      </h2>
      {getEducation}
    </section>
  );
};

export default Education;
