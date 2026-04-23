# 🌐 Jenny Mai - Personal Website

Welcome to my personal website! This site serves as a showcase of my skills, projects, and experiences as a Software Engineer specializing in Web Development, Data Science, and DevOps.

## 🚀 Live Demo
Visit: [jennymaidev.github.io](https://jennymaidev.github.io)

## 📋 About Me
I am a Data Science & Computer Science graduate from the **University of Illinois Urbana-Champaign** (Aug 2022 – May 2026), with exchange studies at **University of Melbourne** (2024) and **Nanyang Technological University** (2025). I am a **James Scholar** and recipient of the **UIUC iSchool Scholarship** and **UIUC International Student Tuition Scholarship**.

I enjoy building scalable web applications, developing data pipelines, and deploying solutions through robust DevOps practices.

## 💼 Experience
- **Cloud Engineer** - Prolaio (Jan 2026 – Present, Chicago, IL)
- **Cloud Engineer Intern** - Prolaio (Jun 2025 – Dec 2025, Chicago, IL)
- **Software Engineer Intern** - Bumpups (Jan 2025 – May 2025, Remote)
- **Software Engineer Intern** - Illini Media (Aug 2023 – Jun 2025, Champaign, IL)
- **Research Assistant - Data Engineering** - UIUC iSchool (Aug 2023 – May 2025, Champaign, IL)
- **Project Manager & Fullstack Developer** - University of Melbourne C-Lara Lab (Jul 2024 – Dec 2024, Melbourne, AU)
- **Data Engineer Intern** - VietAI Research (Jun 2021 – Mar 2022, San Francisco, CA)

## 💡 Projects
- **[Melbourne Real Estate & Prediction](https://github.com/jennymaidev/melb_realestate)** (Python, Spark, GeoPandas)  
  Developed a data pipeline to enhance real estate data, engineer livability/affordability indexes, and create predictive models for housing prices and rental trends.
  
- **[New York Taxi Analysis & Prediction](https://github.com/jennymaidev/nyc-taxi-prediction)** (Python, Spark)  
  Built predictive models to estimate travel costs with a 94% R-squared accuracy, providing 65% optimized travel recommendations.

## 🔧 Skills
- **Programming Languages:** Python, C++, SQL, JavaScript, Java, HTML/CSS  
- **Frameworks & Libraries:** Django, React.js, Node.js, Flask, NumPy, Pandas, Plotly, Matplotlib, PyTorch  
- **Tools & Platforms:** Docker, GCP/AWS, Git, CI/CD Pipelines, MySQL, PostgreSQL, Apache Spark, Jupyter Notebook, Google Colab, Kubernetes, Power BI  

## 📫 Contact
- **Website:** [jennymai.us](https://jennymai.us)  
- **GitHub:** [github.com/jennymaidev](https://github.com/jennymaidev)  
- **LinkedIn:** [linkedin.com/in/jennymaidev](https://linkedin.com/in/jennymaidev)  
- **Email:** [jennymaidev@gmail.com](mailto:jennymaidev@gmail.com)

---

## 🔄 Switching Between Hiring and Non-Hiring Mode

Hiring mode is controlled by a single environment variable. It shows/hides the Skills section, Projects section, job description bullet points in Experience, Resume button, and Projects nav item.

### 📍 Local Development

In `.env.local`, set:
```
REACT_APP_LOOKING_FOR_WORK=true   # hiring mode
REACT_APP_LOOKING_FOR_WORK=false  # not hiring
```

Restart `npm start` after changing this — CRA bakes env vars at startup.

### 🚀 Production (GitHub Actions)

Set the `LOOKING_FOR_WORK_MODE` GitHub secret to `true` or `false`. The deploy workflow reads from it automatically.

### 📄 Resume (hiring mode only)

The resume is auto-compiled from Overleaf during deployment. To enable:
1. Generate a Git token in Overleaf → Account Settings → Git Integration
2. Add it as a GitHub secret named `OVERLEAF_TOKEN`

The LaTeX install and resume download steps are skipped automatically when not in hiring mode.