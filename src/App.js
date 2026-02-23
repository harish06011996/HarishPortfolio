import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateSkills(true), 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("H4harish.6@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = getStyles(darkMode);

  const skills = [
    { name: "Automation Framework Development", level: 95 },
    { name: "Java", level: 92 },
    { name: "Selenium WebDriver", level: 90 },
    { name: "Playwright", level: 85 },
    { name: "REST Assured API Automation", level: 88 },
    { name: "TestNG / Cucumber BDD", level: 87 },
    { name: "CI/CD (Jenkins)", level: 85 },
    { name: "SQL & Database Testing", level: 80 }
  ];

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={{ fontWeight: "bold" }}>Harish Kumar</div>
        <div>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#experience" style={styles.navLink}>Experience</a>
          <a href="#contributions" style={styles.navLink}>Key Contributions</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} style={styles.themeBtn}>
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Hero with Profile Photo (Only Change) */}
      <header style={styles.hero}>
        <div style={styles.profileWrapper}>
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{
              ...styles.profileImage,
              border: `4px solid ${darkMode ? "#38bdf8" : "#0ea5e9"}`
            }}
          />
        </div>

        <h1 style={styles.h1}>Harish Kumar</h1>
        <p style={styles.tagline}>QA Lead | Senior SDET | Automation Architect</p>
        <div style={styles.badge}>🟢 Open to Opportunities</div>

        <div style={{ marginTop: 25 }}>
          <a href="/Harish_Kumar_Resume_22feb1.pdf" download style={styles.primaryBtnLarge}>
            ⬇ Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/harish-kumar-06b776226"
            target="_blank"
            rel="noreferrer"
            style={styles.secondaryBtn}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/harish06011996"
            target="_blank"
            rel="noreferrer"
            style={styles.secondaryBtn}
          >
            GitHub
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" style={styles.section}>
        <h2 style={styles.h2}>Professional Summary</h2>
        <p style={styles.intro}>
          Senior SDET and QA Lead with 8+ years of experience in Automation Framework Development,
          API Automation, CI/CD integration, and enterprise-level test strategy implementation.
          Specialized in building scalable hybrid frameworks using Java, Selenium, Playwright,
          REST Assured, TestNG, and Cucumber.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" style={styles.sectionAlt}>
        <h2 style={styles.h2}>Core Technical Competencies</h2>
        {skills.map((skill, i) => (
          <div key={i} style={{ marginBottom: 25 }}>
            <div style={styles.skillHeader}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: animateSkills ? `${skill.level}%` : "0%"
                }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.h2}>Professional Experience</h2>

        <div style={styles.expCard}>
          <h3>QA Lead | Yamaha Motors India Pvt. Ltd.</h3>
          <p style={styles.date}>Nov 2022 – Present</p>
          <ul style={styles.list}>
            <li>Architected scalable automation frameworks improving regression efficiency by 60%.</li>
            <li>Integrated Jenkins CI/CD pipelines reducing manual deployment validation time.</li>
            <li>Led QA team and established automation best practices.</li>
          </ul>
        </div>

        <div style={styles.expCard}>
          <h3>Software Quality Engineer | Fonantrix Solutions</h3>
          <p style={styles.date}>Feb 2018 – Nov 2022</p>
          <ul style={styles.list}>
            <li>Developed BDD automation frameworks using Cucumber & TestNG.</li>
            <li>Automated REST APIs using REST Assured.</li>
            <li>Implemented database validation using SQL queries.</li>
          </ul>
        </div>
      </section>

      {/* Key Contributions */}
      <section id="contributions" style={styles.sectionAlt}>
        <h2 style={styles.h2}>Key Contributions – TC Gen Tool</h2>
        <div style={styles.expCard}>
          <p style={styles.intro}>
            Designed and developed "TC Gen" – an intelligent Test Case Generation tool that empowers
            non-technical stakeholders to automatically generate structured manual test cases.
          </p>
          <ul style={styles.list}>
            <li>Automated conversion of automation scripts into manual test cases.</li>
            <li>Reduced manual documentation effort by 70%.</li>
            <li>Improved traceability between automation and functional test cases.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.h2}>Contact</h2>
        <div style={styles.contactWrapper}>
          <div style={styles.formCard}>
            {success ? (
              <div style={styles.successBox}>Message sent successfully.</div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <input type="text" placeholder="Your Name" required style={styles.input} />
                <input type="email" placeholder="Your Email" required style={styles.input} />
                <textarea rows="4" placeholder="Your Message" required style={styles.textarea}></textarea>
                <button type="submit" style={styles.primaryBtn}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div style={styles.infoCard}>
            <div style={styles.contactItem}>
              <span>📧</span>
              <span style={{ flex: 1 }}>H4harish.6@gmail.com</span>
              <button onClick={copyEmail} style={styles.copyBtn}>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <a href="tel:+918791543176" style={styles.contactItem}>
              📱 +91 87915 43176
            </a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Harish Kumar | Senior SDET | Automation Framework Architect
      </footer>
    </div>
  );
}

const getStyles = (darkMode) => ({
  page: {
    fontFamily: "Segoe UI, sans-serif",
    scrollBehavior: "smooth",
    background: darkMode ? "#0f172a" : "#f8fafc",
    color: darkMode ? "#f1f5f9" : "#0f172a"
  },

  navbar: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: darkMode ? "#111827" : "#ffffff",
    zIndex: 1000
  },

  navLink: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#38bdf8",
    fontWeight: "bold"
  },

  themeBtn: { background: "transparent", border: "none", cursor: "pointer" },

  hero: { textAlign: "center", padding: "90px 20px" },

  profileWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 15
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    objectFit: "cover",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "pulse 3s infinite"
  },

  h1: { fontSize: 48 },
  tagline: { color: "#38bdf8" },

  badge: {
    marginTop: 10,
    padding: "6px 14px",
    backgroundColor: "#16a34a",
    borderRadius: 20,
    display: "inline-block"
  },

  primaryBtnLarge: {
    padding: "12px 20px",
    background: "#0ea5e9",
    color: "white",
    borderRadius: 8,
    textDecoration: "none",
    marginRight: 10
  },

  secondaryBtn: {
    padding: "12px 20px",
    border: "1px solid #38bdf8",
    borderRadius: 8,
    textDecoration: "none",
    marginRight: 10,
    color: "#38bdf8"
  },

  section: { padding: "70px 20px", maxWidth: 1000, margin: "auto" },
  sectionAlt: { padding: "70px 20px", backgroundColor: darkMode ? "#111827" : "#ffffff" },

  h2: { textAlign: "center", marginBottom: 40 },
  intro: { lineHeight: 1.8, fontSize: 16, textAlign: "center" },

  skillHeader: { display: "flex", justifyContent: "space-between" },
  progressBar: { width: "100%", height: 10, backgroundColor: "#1e293b", borderRadius: 10 },
  progressFill: { height: "100%", backgroundColor: "#0ea5e9", borderRadius: 10, transition: "width 1.5s ease" },

  expCard: { backgroundColor: darkMode ? "#1e293b" : "#ffffff", padding: 25, borderRadius: 15, marginBottom: 20 },

  date: { color: "#38bdf8" },
  list: { lineHeight: 1.8 },

  contactWrapper: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40 },

  formCard: { backgroundColor: darkMode ? "#1e293b" : "#ffffff", padding: 30, borderRadius: 20 },
  infoCard: { backgroundColor: darkMode ? "#1e293b" : "#ffffff", padding: 30, borderRadius: 20 },

  form: { display: "flex", flexDirection: "column", gap: 15 },

  input: { padding: 12, borderRadius: 8 },
  textarea: { padding: 12, borderRadius: 8 },

  primaryBtn: { padding: 12, background: "#0ea5e9", border: "none", borderRadius: 8, cursor: "pointer" },

  contactItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
    backgroundColor: darkMode ? "#0f172a" : "#f1f5f9",
    marginBottom: 10,
    textDecoration: "none",
    color: darkMode ? "#f1f5f9" : "#0f172a"
  },

  copyBtn: { padding: "4px 8px", border: "none", borderRadius: 5 },

  successBox: { padding: 12, borderRadius: 8, backgroundColor: "#16a34a", color: "white", textAlign: "center" },

  footer: { textAlign: "center", padding: 30 }
});
