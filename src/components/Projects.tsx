const Projects: React.FC = () => {
  const projects = [
    {
      title: "Excel Automation Tool",
      description:
        "Built a Python automation script to clean data, merge multiple Excel/CSV files, and generate reports automatically.",
      tech: ["Python", "Pandas", "Excel"],
      github: "https://github.com/yourusername/excel-automation",
      demo: "#",
    },
    {
      title: "Data Processing Pipeline",
      description:
        "Created a Python-based data processing workflow to handle large datasets, perform validation, and produce clean outputs.",
      tech: ["Python", "Pandas", "NumPy"],
      github: "https://github.com/yourusername/data-pipeline",
      demo: "#",
    },
    {
      title: "Web Scraping Script",
      description:
        "Developed a permission-based web scraping script to extract structured data for analysis and reporting.",
      tech: ["Python", "BeautifulSoup", "Requests"],
      github: "https://github.com/yourusername/web-scraper",
      demo: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive personal portfolio using React to showcase skills, projects, and services.",
      tech: ["React.js", "HTML", "CSS"],
      github: "https://github.com/Rahulmaurya1234/my-portfolio",
      demo: "#",
    },
    {
      title: "Machine Learning Prediction Model",
      description:
        "Built a basic machine learning model for prediction tasks using cleaned datasets and evaluated performance.it includes data preprocessing, model training, and evaluation",
      tech: ["Python", "Scikit-learn"],
      github: "https://github.com/Rahulmaurya1234/salary-prediction",
      demo: "#",
    },
    {
      title: "CareerConnect – Job & Career Platform",
      description:
        "Developed a web application using Django to connect job seekers with     opportunities includes user authentication, profile management, job listings, and a responsive UI for seamless career exploration.",
      tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
      github: "https://github.com/Rahulmaurya1234/careerconnect",
      demo: "https://careerconnect-3z8g.onrender.com/",
    },
    {
  title: "Sudha Suman Foundation – NGO Website",
  description:
    "Developed a dynamic NGO website using PHP to showcase the foundation’s mission, activities, and initiatives. The site includes structured content pages, responsive layout, and a simple, user-friendly interface to improve outreach and awareness.",
  tech: ["PHP", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/Rahulmaurya1234/sudhasumanfoundation",
  demo: "https://sudhasuman.free.nf/?i=1",
},

  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} style={styles.card}>
            <div style={styles.icon}>📂</div>

            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.description}</p>

            <div style={styles.tags}>
              {project.tech.map((t) => (
                <span key={t} style={styles.tag}>
                  {t}
                </span>
              ))}
            </div>

            <div style={styles.buttons}>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <button style={styles.primary}>View</button>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <button style={styles.secondary}>GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "80px 48px",
  },

  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "48px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // 🔥 mobile safe
    gap: "28px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  card: {
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "14px",
  padding: "28px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",

  /* 🔥 SOFT SHADOW */
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
},


  icon: {
    fontSize: "28px",
  },

  title: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#e5e7eb",
  },

  desc: {
    fontSize: "15px",
    color: "#9ca3af",
    lineHeight: 1.6,
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "6px",
  },

  tag: {
    background: "#020617",
    border: "1px solid #1e293b",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "13px",
    color: "#cbd5f5",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    marginTop: "16px",
    flexWrap: "wrap", // 🔥 mobile buttons wrap
  },

  primary: {
    padding: "8px 18px",
    background: "#38bdf8",
    color: "#020617",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },

  secondary: {
    padding: "8px 18px",
    background: "transparent",
    color: "#38bdf8",
    border: "1px solid #38bdf8",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default Projects;
