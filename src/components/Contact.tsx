const Contact: React.FC = () => {
  return (
    <section style={styles.section} id="contact">
      <h2 style={styles.heading}>Let’s Work Together</h2>

      <p style={styles.text}>
        Have a project, need automation help, or want to collaborate?
        I’m always open to discussing new ideas and opportunities.
      </p>

      <div style={styles.buttons}>
        {/* EMAIL */}
        <a
          href="mailto:rahul2003maurya@gmail.com"
          style={{ ...styles.button, ...styles.primary }}
        >
          📧 Email Me
        </a>

        {/* FIVERR */}
        <a
          href="https://www.fiverr.com/rahul_dev_ai"
          target="_blank"
          rel="noreferrer"
          style={{ ...styles.button, ...styles.secondary }}
        >
          💼 Hire on Fiverr
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/rahul-maurya-2003ji"
          target="_blank"
          rel="noreferrer"
          style={{ ...styles.button, ...styles.outline }}
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "80px 48px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "16px",
  },

  text: {
    fontSize: "18px",
    color: "#9ca3af",
    marginBottom: "40px",
    lineHeight: 1.6,
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  button: {
    padding: "12px 26px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
    
  },

  primary: {
    background: "#38bdf8",
    color: "#020617",
  },

  secondary: {
    background: "#020617",
    color: "#38bdf8",
    border: "1px solid #38bdf8",
  },

  outline: {
    background: "transparent",
    color: "#e5e7eb",
    border: "1px solid #1e293b",
  },
};

export default Contact;
