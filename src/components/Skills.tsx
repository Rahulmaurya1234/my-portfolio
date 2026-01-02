const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "🧠 Core Programming",
      skills: ["Python", "C++", "JavaScript"],
    },
    {
      title: "⚙️ Automation & Data",
      skills: [
        "Python Automation",
        "Excel Automation",
        "Data Processing",
        "Pandas",
        "NumPy",
      ],
    },
    {
      title: "🌐 Web Development",
      skills: [
        "React.js",
        "HTML5",
        "Tailwind CSS",
        "Django Framework",
        "REST API",
      ],
    },
    {
      title: "🤖 AI / Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning (Basics)",
        "AI Fundamentals",
        "Data Analysis",
      ],
    },
    {
      title: "🔍 SEO & Web Optimization",
      skills: [
        "Basic SEO",
        "On-Page SEO",
        "Meta Tags Optimization",
        "Website Indexing",
        "Performance Optimization",
      ],
    },
    {
      title: "🛠️ Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Google Colab",
        "Jupyter Notebook",
      ],
    },
    {
      title: "🔐 Security & Practices",
      skills: [
        "Cyber Security Basics",
        "Clean Code Practices",
        "Debugging",
        "Testing Basics",
      ],
    },
  ];

  return (
    <section style={styles.section} id="skills">
      <h2 style={styles.heading}>Skills</h2>

      <p style={styles.subtitle}>
        Python Automation • React Development • AI/ML Basics • SEO Optimization
      </p>

      <div style={styles.wrapper}>
        {skillGroups.map((group) => (
          <div key={group.title} style={styles.group}>
            <h3 style={styles.groupTitle}>{group.title}</h3>

            <div style={styles.grid}>
              {group.skills.map((skill) => (
                <span key={skill} style={styles.card}>
                  {skill}
                </span>
              ))}
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
    textAlign: "center",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "12px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#9ca3af",
    marginBottom: "48px",
  },

  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "48px",
  },

  group: {
    textAlign: "left",
  },

  groupTitle: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "#e5e7eb",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", // 🔥 mobile friendly
    gap: "16px",
  },

  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    padding: "14px 16px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 500,
    color: "#cbd5f5",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
};

export default Skills;
