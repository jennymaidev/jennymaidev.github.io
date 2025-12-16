import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2026 - Present"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.prolaio.com/" target="_blank" rel="noopener noreferrer">Prolaio</a> @ Chicago, IL</h4>
            {/* <p></p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2025 - Dec 2025"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.prolaio.com/" target="_blank" rel="noopener noreferrer">Prolaio</a> @ Chicago, IL</h4>
            {/* <p>• Deployed a CI/CD pipeline to automate dependency & microservice updates, cutting manual deployment tasks by 80%.<br />• Implemented dedicated Kafka sinks for various data objects and engineered real-time broadcast metrics using Micrometer's TimerFactory for granular data streaming monitoring.<br />• Integrated Renovate across repositories to automate dependency management, enhancing security and service reliability.</p> */}
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - May 2025"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://bumpups.com/" target="_blank" rel="noopener noreferrer">Bumpups</a> @ Dallas, TX</h4>
            {/* # NOT-HIRING <p>• Designed & optimized prompts using DSPy to improve LLM fine-tuning efficiency & model performance across use cases.<br />• Developed data preprocessing pipelines and evaluation scripts, achieving 90% alignment with targeted output behaviors.</p> */}
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - Jun 2025"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://illinimedia.org/" target="_blank" rel="noopener noreferrer">Illini Media</a> @ Champaign, IL</h4>
            {/* # NOT-HIRING <p>• Developed backend systems, optimizing database operations & pipelines to improve publication efficiency by 45%.<br />• Implemented role-based access controls and security protocols to ensure data integrity and platform security.</p> */}
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - Present"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant - Data Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://chi.ischool.illinois.edu/projects/chime-in-illinois/" target="_blank" rel="noopener noreferrer">UIUC iSchool Research</a> @ Champaign, IL</h4>
            {/* # NOT-HIRING <p>• Engineered data integrity pipelines for 25,000+ bilingual patient records using Python & R, conducting statistical analysis to generate novel insights into Pneumococcal Vaccine effectiveness.<br />• Developed a novel Generative AI tool to automate PEMAT (Patient Education Materials Assessment Tool) evaluations; rigorously validated by scraping archived web data and replicating peer-reviewed studies for performance analysis.</p> */}
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2024 - Dec 2024"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant - Project Manager & Fullstack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.c-lara.org/index.html" target="_blank" rel="noopener noreferrer">C-Lara</a> @ University of Melbourne, Australia</h4>
            {/* # NOT-HIRING <p>• Led a 5-member Agile team to architect a full-stack web application (Django, PostgreSQL, React) for reinforcement learning, utilizing prompt engineering to drive AI Chain of Thought reasoning.<br />• Engineered a robust CI/CD pipeline for automated deployment to GCP, reducing manual effort by 85%.</p> */}
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 - Mar 2022"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://vietai.org/" target="_blank" rel="noopener noreferrer">VietAI Research</a> @ San Francisco, CA</h4>
            {/* # NOT-HIRING <p>• Scraped and preprocessed 30,000 medical journals using Selenium, boosting NLP model accuracy by +3.5 BLEU.<br />• Optimized data pairing with quality controls, enhancing English-Vietnamese translation performance.</p> */}
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;