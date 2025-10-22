import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript", "React.js", "Node.js", "Django", "Flask", "PostgreSQL", "MySQL", "HTML/CSS", "Java", "Kotlin", "C++", "Unity"
];

const labelsSecond = [
    "Python", "Apache Spark", "SQL", "Pandas", "NumPy", "Matplotlib", "PyTorch", "BigQuery", "Power BI", "Apache Kafka"
];

const labelsThird = [
    "Docker", "Kubernetes", "Google Cloud", "CI/CD", "Terraform IaC", "Git"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Education</h1>
            <div className="education-grid">
                <div className="education-item">
                    <h4>Data Science & Computer Science Bachelor @ University of Illinois Urbana-Champaign</h4>
                    <p>Exchange: University of Melbourne (2024) & Nanyang Technological University (2025)</p>
                    <p>Honors: James Scholar, UIUC iSchool Scholarship, and UIUC International Student Tuition Scholarship</p>
                </div>
            </div>

            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Software Development</h3>
                    <p>
                    I create scalable web applications with a focus on efficient backend systems and intuitive frontend interfaces. My work emphasizes secure access controls and optimized database operations, leading to enhanced application performance.
                    </p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Engineering & Machine Learning</h3>
                    <p>
                    I transform raw data into valuable insights through rigorous data engineering and predictive modeling. My expertise includes handling large datasets and ensuring data integrity for informed decision-making.
                    </p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>
                    I streamline development workflows using robust DevOps practices and automated deployment pipelines. I implement CI/CD, containerization, and cloud solutions to ensure efficient and reliable software delivery.
                    </p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Tech stack:</span> */}
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;