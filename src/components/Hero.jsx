import { motion } from "framer-motion"
import trainerData from "../data/trainerData"

function Hero() {
  return (
    <section
      style={{
        ...styles.hero,
        background: `url(${trainerData.images.heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={styles.overlay}></div>

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p style={styles.tag}>
          {trainerData.hero.tag}
        </p>

        <h1 style={styles.title}>
          {trainerData.hero.titleStart}
          <span style={styles.gradientText}>
            {" "}
            {trainerData.hero.titleHighlight}{" "}
          </span>
          {trainerData.hero.titleEnd}
        </h1>

        <p style={styles.subtitle}>
          {trainerData.hero.subtitle}
        </p>

        <div style={styles.buttons}>
          <a href="#pricing" style={styles.primaryBtn}>
            Start Your Transformation
          </a>

          <a
            href="#transformations"
            style={styles.secondaryBtn}
          >
            View Results
          </a>
        </div>

        <div style={styles.stats}>
          {trainerData.hero.stats.map((stat, index) => (
            <div
              key={index}
              style={styles.statBox}
            >
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const styles = {
  hero: {
    position: "relative",
    minHeight: "100vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",

    padding: "120px 20px",
  },

  overlay: {
    position: "absolute",
    inset: 0,

    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.82), rgba(0,0,0,0.94))",
  },

  glow1: {
    position: "absolute",

    width: "320px",
    height: "320px",

    background: "#ff4c29",

    filter: "blur(150px)",

    opacity: 0.2,

    top: "-70px",
    left: "-100px",
  },

  glow2: {
    position: "absolute",

    width: "320px",
    height: "320px",

    background: "#8b5cf6",

    filter: "blur(150px)",

    opacity: 0.2,

    bottom: "-70px",
    right: "-100px",
  },

  content: {
    position: "relative",
    zIndex: 2,

    maxWidth: "950px",

    textAlign: "center",

    margin: "0 auto",
  },

  tag: {
    color: "#ff4c29",

    letterSpacing: "3px",

    marginBottom: "20px",

    fontWeight: "600",
  },

  title: {
    fontSize: "clamp(3rem, 8vw, 6rem)",

    fontWeight: "800",

    lineHeight: 1.05,

    marginBottom: "25px",
  },

  gradientText: {
    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",

    WebkitBackgroundClip: "text",

    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#b3b3b3",

    fontSize: "clamp(1rem, 2vw, 1.25rem)",

    lineHeight: 1.8,

    maxWidth: "700px",

    margin: "0 auto 40px",
  },

  buttons: {
    display: "flex",

    justifyContent: "center",

    gap: "20px",

    flexWrap: "wrap",

    marginBottom: "60px",
  },

  primaryBtn: {
    textDecoration: "none",

    padding: "15px 35px",

    borderRadius: "40px",

    background:
      "linear-gradient(45deg, #ff4c29, #8b5cf6)",

    color: "white",

    fontWeight: "700",

    boxShadow:
      "0 0 25px rgba(255,76,41,0.4)",

    transition: "0.3s",
  },

  secondaryBtn: {
    textDecoration: "none",

    padding: "15px 35px",

    borderRadius: "40px",

    border:
      "1px solid rgba(255,255,255,0.2)",

    background:
      "rgba(255,255,255,0.05)",

    backdropFilter: "blur(10px)",

    color: "white",

    fontWeight: "600",

    transition: "0.3s",
  },

  stats: {
    display: "flex",

    justifyContent: "center",

    gap: "20px",

    flexWrap: "wrap",
  },

  statBox: {
    padding: "18px 22px",

    borderRadius: "20px",

    background:
      "rgba(255,255,255,0.05)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(10px)",

    minWidth: "150px",

    boxShadow:
      "0 0 20px rgba(255,76,41,0.08)",
  },
}

export default Hero