import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Window resize check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // menu close on mobile after click
  };

  return (
    <nav style={styles.nav}>
      {/* LOGO */}
      <div style={styles.logo} onClick={() => scrollToSection("hero")}>
        Rahul Maurya
      </div>

      {/* HAMBURGER */}
      {isMobile && (
        <div style={styles.hamburger} onClick={() => setOpen(!open)}>
          ☰
        </div>
      )}

      {/* MENU */}
      <ul
        style={{
          ...styles.menu,
          ...(isMobile
            ? open
              ? styles.menuOpen
              : { display: "none" }
            : {}), // desktop always show
        }}
      >
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    background: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #1e293b",
  },

  logo: {
    fontSize: "22px",
    fontWeight: 700,
    cursor: "pointer",
    color: "#38bdf8",
    zIndex: 101,
  },

  hamburger: {
    fontSize: "26px",
    cursor: "pointer",
    color: "#e5e7eb",
    zIndex: 101,
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "28px",
    cursor: "pointer",
    fontSize: "16px",
    margin: 0,
    padding: 0,
  },

  /* MOBILE MENU OPEN STATE */
  menuOpen: {
    position: "absolute",
    top: "64px",
    right: 0,
    background: "#020617",
    flexDirection: "column",
    display: "flex",
    width: "200px",
    padding: "20px",
    gap: "16px",
    borderLeft: "1px solid #1e293b",
    borderBottom: "1px solid #1e293b",
  },
};

export default Navbar;
