import { useState, useEffect } from "react";
import profile from "../assets/profile.png";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        ...styles.hero,
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "40px 20px" : "0 80px",
        textAlign: isMobile ? "center" : "left",
      }}
      id="hero"
    >
      {/* LEFT CONTENT */}
      <div
        style={{
          ...styles.left,
          maxWidth: isMobile ? "100%" : "600px",
          paddingRight: isMobile ? 0 : "20px",
        }}
      >
        <span style={styles.badge}>Available for Work</span>

        <h1 style={{ ...styles.title, fontSize: isMobile ? 36 : 56 }}>
          Hi, I’m <span style={styles.name}>Rahul Maurya</span>
        </h1>

        <h2 style={{ ...styles.subtitle, fontSize: isMobile ? 20 : 26 }}>
          Machine Learning & Python Automation Developer
        </h2>

        <p style={{ ...styles.desc, fontSize: isMobile ? 14 : 18 }}>
          I build fast, modern applications with clean UI, strong fundamentals,
          and Python-based automation and AI/ML solutions.
        </p>

        <div
          style={{
            ...styles.buttons,
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <a href="#projects">
            <button style={styles.primary}>View Projects</button>
          </a>
          <a
            href="https://www.fiverr.com/rahul_dev_ai"
            target="_blank"
            rel="noreferrer"
          >
            <button style={styles.secondary}>Hire Me</button>
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ ...styles.right, marginTop: isMobile ? "30px" : 0 }}>
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
    gap: "40px",
    flexWrap: "wrap",
  },

  left: {
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
    fontWeight: 700,
    marginBottom: "10px",
  },

  name: {
    color: "#38bdf8",
  },

  subtitle: {
    color: "#cbd5f5",
    marginBottom: "14px",
  },

  desc: {
    lineHeight: 1.6,
    color: "#9ca3af",
    marginBottom: "28px",
  },

  buttons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
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

  imageWrapper: {
    width: "320px",
    height: "420px",
    borderRadius: "16px",
    background: "#0f172a",
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
