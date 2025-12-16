import React from "react";
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        {/* # NOT-HIRING
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jennymaidev/melb_realestate" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="Melbourne Real Estate Project" width="100%" />
                </a>
                <a href="https://github.com/jennymaidev/melb_realestate" target="_blank" rel="noreferrer">
                    <h2>Melbourne Real Estate</h2>
                </a>
                <p>
                    Developed a Python/Spark pipeline to enhance real estate data with geospatial metrics, generate livability/affordability indexes, and create predictive models for housing prices and rental trends.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/jennymaidev/nyc-taxi-prediction" target="_blank" rel="noreferrer">
                    <img src={mock05} className="zoom" alt="New York Taxi Analysis & Prediction" width="100%" />
                </a>
                <a href="https://github.com/jennymaidev/nyc-taxi-prediction" target="_blank" rel="noreferrer">
                    <h2>New York Taxi Price</h2>
                </a>
                <p>
                Used Spark to analyze NYC taxi data, build predictive models (94% R-squared, $3.80 error) for travel cost, and provide 65% cost/time optimized travel recommendations.
                </p>
            </div>
        </div>
        */}
    </div>
    );
}

export default Project;