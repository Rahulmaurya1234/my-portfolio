import profile from "../assets/profile.png";

const Hero: React.FC = () => {
  return (
    <section style={styles.hero} id="hero">
      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <span style={styles.badge}>Available for Work</span>

        <h1 style={styles.title}>
          Hi, I’m <span style={styles.name}>Rahul Maurya</span>
        </h1>

        <h2 style={styles.subtitle}>
          Machine Learning & Python Automation Developer
        </h2>

        <p style={styles.desc}>
          I build fast, modern applications with clean UI, strong fundamentals,
          and Python-based automation and AI/ML solutions.
        </p>

        <div style={styles.buttons}>
          <a href="#projects">
            <button style={styles.primary}>View Projects</button>
          </a>
          <a href="https://www.fiverr.com/rahul_dev_ai" target="_blank" rel="noreferrer">
          
            <button style={styles.secondary}>Hire Me</button>
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div style={styles.right}>
        <div style={styles.imageWrapper}>
          <img src={profile} alt="Rahul Maurya" style={styles.image} />
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 80px",
    gap: "40px",
    flexWrap: "wrap", // ✅ mobile support
  },

  left: {
    maxWidth: "600px",
    paddingRight: "20px",
  },

  badge: {
    display: "inline-block",
    background: "#020617",
    border: "1px solid #1e293b",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "14px",
    color: "#38bdf8",
    marginBottom: "16px",
  },

  title: {
    fontSize: "56px",
    fontWeight: 700,
    marginBottom: "10px",
  },

  name: {
    color: "#38bdf8",
  },

  subtitle: {
    fontSize: "26px",
    color: "#cbd5f5",
    marginBottom: "14px",
  },

  desc: {
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#9ca3af",
    marginBottom: "28px",
  },

  buttons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap", // ✅ mobile buttons wrap
  },

  primary: {
    padding: "12px 28px",
    background: "#38bdf8",
    color: "#020617",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },

  secondary: {
    padding: "12px 28px",
    background: "transparent",
    color: "#e5e7eb",
    border: "1px solid #38bdf8",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },

  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  /* 🔥 photo background SAME as body */
  imageWrapper: {
    width: "320px",
    height: "420px",
    borderRadius: "16px",
    background: "#0f172a", // SAME as body
    border: "1px solid #1e293b",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Hero;
