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
            date="Jan 2025 - Present"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Bumpups @ Dallas, TX</h4>
            <p>Enhanced model performance and user interactions through DSPy prompt design, integrated advanced prompting into scalable solutions, and achieved 90% prompt output targets by optimizing input data quality.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - Present"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Illini Media @ Champaign, IL</h4>
            <p>Optimized publication workflows by 45% and improved system security/efficiency via backend development, role-based access control, and CI/CD pipeline automation.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - Present"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant | Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Center for Health Informatics @ University of Illinois at Urbana-Champaign</h4>
            <p>Led bilingual vaccine data cleaning and analysis (Python/R), ensuring data integrity across 25,000+ records and delivering vaccine effectiveness insights via EDA and statistical analysis.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2024 - Dec 2024"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager & Fullstack Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">C-Lara Lab @ University of Melbourne, Australia</h4>
            <p>Led a 5-member Agile team to develop a Chain of Thought web application, delivering a scalable Django/PostgreSQL backend with React.js UI, automating deployment on Google Cloud via CI/CD pipelines (85% reduction in manual effort), and enhancing AI performance through prompt engineering.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 - Mar 2022"
            iconStyle={{ background: '#0d1116', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">VietAI Research @ San Francisco, CA</h4>
            <p>Scraped and preprocessed 30,000 medical journals (Selenium), improving NLP translation accuracy by 3.5 BLEU through optimized data pairing and quality controls.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;