const Footer: React.FC = () => {
  return (
    <footer style={styles.footer} id="contact">
      © 2026 Rahul Maurya · Built with React & TypeScript
    </footer>
  );
};

const styles = {
  footer: {
    padding: "24px",
    textAlign: "center" as const,
    borderTop: "1px solid #1e293b",
    color: "#9ca3af",
  },
};

export default Footer;
