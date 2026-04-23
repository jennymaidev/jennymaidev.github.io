/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useLookingForWork } from '../hooks/useLookingForWork';
import '../assets/styles/Main.scss';
// import resume from '../assets/files/resume.pdf';
function Main() {
  const lookingForWork = useLookingForWork();
  const resume = process.env.REACT_APP_LOOKING_FOR_WORK === 'true' ? require('../assets/files/resume.pdf') : null;

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jennymaidev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jennymaidev/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:jennymaidev@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Jenny Mai</h1>
          <p>Cloud Engineer</p>
          {lookingForWork && <button className="button" onClick={() => window.open(resume, '_blank')}>Resume</button>}
          <div className="mobile_social_icons">
            <a href="https://github.com/jennymaidev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jennymaidev/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:jennymaidev@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;