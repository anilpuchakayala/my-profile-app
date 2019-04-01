import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Highlights = props => {
  const getHighlights = props.highlightsData.map(data => (
    <tbody key={data.id}>
      <tr>
        <td>{data.language}</td>
        <td>{data.experience}</td>
      </tr>
    </tbody>
  ));
  return (
    <section className="hlighlights">
      <h2 className="text-uppercase">
        <FontAwesomeIcon icon="highlighter" /> Highlights
      </h2>
      <table class="table table-borderless">
        <thead />
        {getHighlights}
      </table>
    </section>
  );
};

export default Highlights;
