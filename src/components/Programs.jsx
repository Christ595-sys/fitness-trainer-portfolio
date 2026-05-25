import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Programs() {
  return (
    <section id="programs" style={styles.section}>
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p style={styles.tag}>TRAINING PROGRAMS</p>

        <h2 style={styles.heading}>
          Programs Built For
          <span style={styles.gradientText}>
            {" "}Real Results
          </span>
        </h2>

        <p style={styles.subheading}>
          Personalized coaching programs designed to help you
          build strength, confidence, and a powerful physique.
        </p>
      </motion.div>

      <div style={styles.container}>
        {trainerData.programs.map((program, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow:
                "0 0 40px rgba(255,76,41,0.18)",
            }}
            viewport={{ once: true }}
          >
            <div style={styles.icon}>
              {program.icon}
            </div>

            <h3 style={styles.cardTitle}>
              {program.title}
            </h3>

            <p style={styles.cardText}>
              {program.desc}
            </p>

            <a href="#pricing" style={styles.button}>
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: "relative",
    padding: "120px 20px",
    background: "#0a0a0a",
    overflow: "hidden",
    textAlign: "center",
  },

  glow1: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "#ff4c29",
    filter: "blur(140px)",
    opacity: 0.15,
    top: "50px",
    left: "-100px",
  },

  glow2: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "#8b5cf6",
    filter: "blur(140px)",
    opacity: 0.15,
    bottom: "0",
    right: "-100px",
  },

  tag: {
    color: "#ff4c29",
    letterSpacing: "3px",
    marginBottom: "20px",
    fontWeight: "600",
    position: "relative",
    zIndex: 2,
  },

  heading: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    marginBottom: "20px",
    position: "relative",
    zIndex: 2,
  },

  gradientText: {
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subheading: {
    color: "#b3b3b3",
    maxWidth: "700px",
    margin: "0 auto 70px",
    lineHeight: 1.8,
    fontSize: "1.1rem",
    position: "relative",
    zIndex: 2,
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },

  card: {
    width: "100%",
    maxWidth: "340px",
    padding: "40px 30px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 30px rgba(255,76,41,0.08)",
    transition: "0.3s",
  },

  icon: {
    fontSize: "3rem",
    marginBottom: "25px",
  },

  cardTitle: {
    fontSize: "1.7rem",
    marginBottom: "20px",
  },

  cardText: {
    color: "#b3b3b3",
    lineHeight: 1.8,
    marginBottom: "30px",
  },

  button: {
    display: "inline-block",
    textDecoration: "none",
    padding: "14px 28px",
    borderRadius: "40px",
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",
    color: "white",
    fontWeight: "600",
    boxShadow:
      "0 0 25px rgba(255,76,41,0.3)",
    transition: "0.3s",
    transform: "translateY(0px)",
  },
}

export default Programs