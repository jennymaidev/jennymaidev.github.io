import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
// import resume from '../assets/files/resume.pdf';
function Main() {
  const resume = require('../assets/files/resume.pdf');

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jennymai10" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nhumai/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:jennymai10@outlook.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Jenny Mai</h1>
          <p>Software Engineer</p>
          <button className="button" onClick={() => window.open(resume, '_blank')}>Resume</button>
          <div className="mobile_social_icons">
            <a href="https://github.com/jennymai10" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nhumai/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:jennymai10@outlook.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;