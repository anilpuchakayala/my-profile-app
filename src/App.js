import React, { Component } from "react";
import Main from "./components/Main";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationArrow,
  faEnvelope,
  faCode,
  faBriefcase,
  faUser,
  faUniversity,
  faMobile,
  faHighlighter,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faLocationArrow,
  faEnvelope,
  faCode,
  faBriefcase,
  faUser,
  faUniversity,
  faMobile,
  faHighlighter,
  faGlobe
);
class App extends Component {
  render() {
    const userInfo = require("./services/resume.json");
    return (
      <div className="App">
        <Main userData={userInfo} />
      </div>
    );
  }
}

export default App;
