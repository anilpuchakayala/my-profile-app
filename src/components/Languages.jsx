import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Languages = props => {
  const getLanguages = props.languagesData.map(data => (
    <tbody key={data.id}>
      <tr>
        <td>{data.language}</td>
        <td>{data.fluency}</td>
      </tr>
    </tbody>
  ));
  return (
    <section className="languages">
      <h2 className="text-uppercase">
        <FontAwesomeIcon icon="globe" /> Language Skills
      </h2>
      <table class="table table-borderless">
        <thead />
        {getLanguages}
      </table>
    </section>
  );
};

export default Languages;
