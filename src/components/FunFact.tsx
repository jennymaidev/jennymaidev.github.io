import React from "react";
import '../assets/styles/FunFact.scss';
import LatteGame from "./LatteGame";

const tidbits = [
  {
    icon: '🌍',
    text: "I've touched down in 🇻🇳 🇸🇬 🇦🇺 🇰🇷 🇨🇳 🇹🇭 🇰🇭 🇫🇮 🇩🇪 🇫🇷 🇨🇿 🇪🇪 🇨🇭 🇩🇰 🇸🇪 🇨🇦 🇺🇸, more to add soon... I speak 3.5 languages (the 0.5 to account for the days I forget how to form sentences).",
  },
  {
    icon: '🩰',
    text: "I have some national gymnastics gold medals, which mostly just means I'm very good at falling with style ✨.",
  },
];

function FunFact() {
  return (
    <>
      <div className="fun-fact-container">
        <LatteGame />
      </div>
      <div className="fun-fact-container">
        <div className="fun-fact-content">
          <h2>Tidbits</h2>
          <div className="tidbit-grid">
            {tidbits.map((tidbit, index) => (
              <div className="tidbit-card" key={index}>
                <span className="tidbit-icon">{tidbit.icon}</span>
                <p>{tidbit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FunFact;
