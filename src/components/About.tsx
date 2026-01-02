const About: React.FC = () => {
  return (
    <section style={styles.section} id="about">
      <h2 style={styles.heading}>About Me</h2>

      <p style={styles.text}>
        I am a Python developer with a strong focus on automation,
        data processing, and AI/ML fundamentals. I enjoy building
        practical solutions that reduce manual effort and improve
        system efficiency.
      </p>

      <p style={styles.text}>
        I am currently pursuing a B.Tech in Artificial Intelligence
        and Machine Learning. I have completed an IBM-certified AI
        Virtual Internship and a Django Full Stack training from
        RCPL Training Solutions Pvt. Ltd., where I worked on backend
        development and core web application concepts.
      </p>

      <p style={styles.text}>
        Additionally, I am certified in Python programming through
        GUVI | HCL collaboration and hold a certification in Cyber
        Security Basics, which strengthened my understanding of
        secure and reliable application development.
      </p>

      <p style={styles.highlight}>
        I believe in clean code, clear communication, and on-time
        delivery. My goal is to build scalable, secure, and
        real-world solutions that create meaningful impact.
      </p>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "80px 48px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "28px",
  },

  text: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "#9ca3af",
    marginBottom: "18px",
  },

  highlight: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "#e5e7eb",
    marginTop: "26px",
    fontWeight: 500,
  },
};

export default About;
