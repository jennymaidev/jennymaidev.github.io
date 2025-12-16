# 🌐 Jenny Mai - Personal Website

Welcome to my personal website! This site serves as a showcase of my skills, projects, and experiences as a Software Engineer specializing in Web Development, Data Science, and DevOps.

## 🚀 Live Demo
Visit: [jennymaidev.github.io](https://jennymaidev.github.io)

## 📋 About Me
I am a Data Science & Computer Science undergraduate at the **University of Illinois Urbana-Champaign** (Aug 2022 – May 2026), currently participating in exchange studies at **University of Melbourne** and **Nanyang Technological University** (2024 - 2025). I am a **James Scholar** and recipient of the **UIUC iSchool Scholarship**.

I enjoy building scalable web applications, developing data pipelines, and deploying solutions through robust DevOps practices. 

## 💼 Experience
- **Software Engineer Intern** - Bumpups (Jan 2025 – Present, Remote)
- **Software Engineer Intern** - Illini Media (Aug 2023 – Present, Champaign, IL)
- **Project Manager & Fullstack Developer Intern** - University of Melbourne C-Lara Lab (Jul 2024 – Dec 2024, Melbourne, AU)
- **Research Assistant - Data Analyst** - UIUC Center for Health Informatics (Aug 2023 – Present)
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

This website has sections that can be toggled on/off when actively job searching. All commented-out sections are tagged with `# NOT-HIRING` for easy searching.

### 📍 To Revert to HIRING Mode (Show All Content)

Search for `# NOT-HIRING` across the codebase and uncomment the following:

1. **Skills Section** - `src/components/Expertise.tsx`
   - Uncomment lines containing the entire Skills grid (Software Development, Data Engineering & Machine Learning, DevOps & Automation)
   - This includes the `<h1>Skills</h1>` header and all three skill cards with icons and tech stack chips

2. **Projects Section** - `src/components/Project.tsx`
   - Uncomment the entire projects grid including:
     - `<h1>Projects</h1>` header
     - Melbourne Real Estate project card
     - New York Taxi Price project card

3. **Resume Button** - `src/components/Main.tsx`
   - Uncomment the Resume button:
     ```tsx
     <button className="button" onClick={() => window.open(resume, '_blank')}>Resume</button>
     ```

4. **Navigation Bar** - `src/components/Navigation.tsx`
   - Update the `navItems` array to include Projects:
     ```tsx
     const navItems = [['Background', 'expertise'], ['Experience', 'history'], ['Projects', 'projects']];
     ```

### ✅ Quick Steps:
1. Use your editor's search function (Cmd/Ctrl + Shift + F) to find all instances of `# NOT-HIRING`
2. Uncomment each section found (typically 4 locations)
3. Save all files
4. Test locally with `npm start`
5. Commit and push changes to deploy

### 🚀 Deploy Changes:
```bash
git add .
git commit -m "Revert to hiring mode - show all sections"
git push origin master
```