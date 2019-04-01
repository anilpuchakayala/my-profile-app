import React from "react";
import Profile from "./Profile";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Education from "./Education";
import Header from "./Header";
import Footer from "./Footer";
import Highlights from "./Highlights";
import Languages from "./Languages";

const Main = props => {
  const profileData = props.userData.basics;
  const aboutData = profileData.summary;
  const workData = props.userData.work;
  const skillsData = props.userData.skills;
  const educationData = props.userData.education;
  const highlightsData = props.userData.highlights;
  const languagesData = props.userData.languages;
  return (
    <div className="container">
      <Header />
      <div className="row">
        <aside className="col-md-4">
          <div className="inner">
            <Profile profileData={profileData} />
            <Highlights highlightsData={highlightsData} />
            <Skills skillsData={skillsData} />
            <Education educationData={educationData} />
            <Languages languagesData={languagesData} />
          </div>
        </aside>
        <main className="col-md-8">
          <div className="inner">
            <About aboutData={aboutData} />
            <Project workData={workData} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
