import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/jennymaidev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/jennymaidev/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:jennymaidev@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>By Jenny Mai with ♡</p>
    </footer>
  );
}

export default Footer;