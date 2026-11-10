/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useLookingForWork } from '../hooks/useLookingForWork';
import '../assets/styles/Main.scss';
// import resume from '../assets/files/resume.pdf';
function Main() {
  const lookingForWork = useLookingForWork();
  const resume = process.env.REACT_APP_LOOKING_FOR_WORK === 'true' ? require('../assets/files/resume.pdf') : null;
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = aboutSectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--bg-shift-x', `${x * -16}px`);
    el.style.setProperty('--bg-shift-y', `${y * -16}px`);
  };

  const handleMouseLeave = () => {
    const el = aboutSectionRef.current;
    if (!el) return;
    el.style.setProperty('--bg-shift-x', '0px');
    el.style.setProperty('--bg-shift-y', '0px');
  };

  const scrollToNext = () => {
    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div
        className="about-section"
        ref={aboutSectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="blob blob-one" />
        <span className="blob blob-two" />
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
        <button className="scroll-cue" onClick={scrollToNext} aria-label="Scroll to next section">
          <KeyboardArrowDownIcon />
        </button>
      </div>
    </div>
  );
}

export default Main;