import React from "react";
import '../assets/styles/FunFact.scss';
import dailyProjectData from "../assets/files/dailyProject.json";

type DailyProject = {
  projectName: string;
  techStack: string[];
  problemSolved: string;
};

const dailyProject = dailyProjectData as DailyProject;

function FunFact() {
  return (
    <>
      <div className="fun-fact-container">
        <div className="fun-fact-content">
          <h2>What I'm working on</h2>
          <h3>{dailyProject.projectName}</h3>
          <p className="description">{dailyProject.problemSolved}</p>
          <div className="tech-stack">
            {dailyProject.techStack.map((tech: string) => (
              <span key={tech}>#{tech} </span>
            ))}
          </div>
        </div>
      </div>
      <div className="fun-fact-container">
        <div className="fun-fact-content">
          <h2>Quick Stats</h2>
          <p>
            I’ve touched down in 🇻🇳 🇸🇬 🇦🇺 🇰🇷 🇨🇳 🇹🇭 🇰🇭 🇫🇮 🇩🇪 🇫🇷 🇨🇿 🇪🇪 🇨🇭 🇩🇰 🇸🇪 🇺🇸, more to add soon...
            I’m speaking 3.5 languages (the 0.5 to account for the days I forget how to form sentences).
          </p>
          <p>I can pour a near-perfect rosetta on your morning cappuccino ☕️</p>
          <p>
            I have some national gymnastics gold medals, which mostly just means I’m very good at falling with style 💃🏻🩰
          </p>
        </div>
      </div>
    </>
  );
}

export default FunFact;